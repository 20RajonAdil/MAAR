#!/usr/bin/env node
/**
 * Generates public/sitemap.xml from the files in src/routes.
 *
 * This runs automatically before every build (see the "build" script in
 * package.json), so any new page added under src/routes/ is picked up the
 * next time the site is built — nobody has to remember to update the
 * sitemap by hand.
 *
 * Conventions mirrored from TanStack Start file-based routing
 * (src/routes/README.md):
 *   - index.tsx              -> /
 *   - about.tsx               -> /about
 *   - certificates/licence.tsx -> /certificates/licence
 *   - __root.tsx, *.gen.ts, README.md, any file starting with "_" or "-"
 *     (layout/pathless routes), and dynamic ($param) or splat ($.tsx)
 *     routes are excluded — dynamic routes have no fixed URL to list here.
 *
 * Pages that are intentionally not indexed (e.g. /thank-you, which sets
 * `noindex` in its own head()) are excluded via NOINDEXED_PATHS below so
 * the sitemap never contradicts a page's own robots meta tag.
 */
import { readdirSync, statSync, writeFileSync } from "node:fs";
import { join, relative, sep } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = fileURLToPath(new URL(".", import.meta.url));
const ROOT_DIR = join(__dirname, "..");
const ROUTES_DIR = join(ROOT_DIR, "src", "routes");
const OUTPUT_FILE = join(ROOT_DIR, "public", "sitemap.xml");

const SITE_URL = "https://maar-navy.vercel.app";

// Keep this in sync with any route that sets `noindex: true` via seo().
const NOINDEXED_PATHS = new Set(["/thank-you"]);

/** Priority/changefreq hints per path — cosmetic, but a reasonable default. */
function priorityFor(path) {
  if (path === "/") return { priority: "1.0", changefreq: "weekly" };
  if (path.startsWith("/certificates/")) return { priority: "0.4", changefreq: "yearly" };
  return { priority: "0.5", changefreq: "monthly" };
}

function walk(dir) {
  /** @type {string[]} */
  const files = [];
  for (const entry of readdirSync(dir)) {
    const fullPath = join(dir, entry);
    const stats = statSync(fullPath);
    if (stats.isDirectory()) {
      files.push(...walk(fullPath));
    } else {
      files.push(fullPath);
    }
  }
  return files;
}

function toRoutePath(filePath) {
  const rel = relative(ROUTES_DIR, filePath).split(sep).join("/");

  if (!rel.endsWith(".tsx") && !rel.endsWith(".ts")) return null;
  if (rel === "__root.tsx") return null;

  const segments = rel.replace(/\.tsx?$/, "").split("/");
  const last = segments[segments.length - 1];

  // Skip layout/pathless routes (_layout), dynamic ($id) and splat ($) routes,
  // and anything else that isn't a plain static segment.
  if (segments.some((s) => s.startsWith("_") || s.startsWith("$") || s.startsWith("-"))) {
    return null;
  }

  if (last === "index") segments.pop();

  const path = "/" + segments.join("/");
  return path === "//" ? "/" : path || "/";
}

function generateSitemap() {
  const files = walk(ROUTES_DIR).filter(
    (f) => (f.endsWith(".tsx") || f.endsWith(".ts")) && !f.endsWith(".gen.ts"),
  );

  const paths = new Set();
  for (const file of files) {
    const path = toRoutePath(file);
    if (path && !NOINDEXED_PATHS.has(path)) paths.add(path);
  }

  const sortedPaths = Array.from(paths).sort((a, b) => (a === "/" ? -1 : a.localeCompare(b)));

  const today = new Date().toISOString().split("T")[0];

  const urlEntries = sortedPaths
    .map((path) => {
      const { priority, changefreq } = priorityFor(path);
      const loc = `${SITE_URL}${path === "/" ? "" : path}`;
      return `  <url>\n    <loc>${loc}</loc>\n    <lastmod>${today}</lastmod>\n    <changefreq>${changefreq}</changefreq>\n    <priority>${priority}</priority>\n  </url>`;
    })
    .join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urlEntries}\n</urlset>\n`;

  writeFileSync(OUTPUT_FILE, xml, "utf-8");
  console.log(`[generate-sitemap] Wrote ${sortedPaths.length} URLs to ${relative(ROOT_DIR, OUTPUT_FILE)}`);
  for (const p of sortedPaths) console.log(`  - ${SITE_URL}${p === "/" ? "" : p}`);
}

generateSitemap();
