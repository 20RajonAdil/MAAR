import maarSymbol from "@/assets/maar-symbol.png";

/**
 * MAAR brand mark.
 *
 * Uses the actual logo artwork supplied by the client (src/assets/maar-symbol.png),
 * not a redrawn/hand-vectorized interpretation. The source file was a very dark
 * photo (a faint grey outline on near-black) — it's processed here only in the
 * sense of standard image cleanup, not redesign:
 *   1. Contrast-stretched so the faint outline reads as a solid white line
 *   2. Backgroound made transparent (alpha channel), so it works on the gold
 *      badge, dark footer, or anywhere else
 *   3. Line widened slightly so it doesn't disappear when scaled down to a
 *      32px nav icon (the original line was ~2px wide on a 1920px photo —
 *      at logo sizes that's sub-pixel and invisible without this)
 *   4. Cropped tight and squared up so it centers correctly in a circular badge
 * The shape/silhouette itself is untouched — this is the client's own artwork.
 *
 * This also replaces the previous <img src={maarMark.url} /> reference, which
 * pointed at Lovable's internal asset host (/__l5e/assets-v1/...) and only
 * resolved inside the Lovable editor — any export outside Lovable had a
 * permanently broken image there. Importing the PNG directly through Vite means
 * it's bundled properly and never 404s in any environment.
 */
export function MaarMark({ className = "h-8 w-8" }: { className?: string }) {
  return (
    <span
      className={`${className} grid place-items-center overflow-hidden rounded-full`}
      style={{
        background: "linear-gradient(135deg, oklch(0.82 0.13 60), oklch(0.68 0.17 48))",
      }}
    >
      <img
        src={maarSymbol}
        alt="MAAR"
        width={1140}
        height={1140}
        className="h-[62%] w-[62%] object-contain"
        draggable={false}
      />
    </span>
  );
}
