import { defineConfig } from "vite";
import viteReact from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import tsConfigPaths from "vite-tsconfig-paths";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import { nitro } from "nitro/vite";

// Plain TanStack Start + Vite config, standard packages only.
//
// Vercel detects TanStack Start + Nitro automatically (zero-config) as long
// as the `nitro()` plugin is present below — no explicit preset/target is
// needed or supported here. Do not remove `nitro()`; without it, Nitro never
// produces deployable server output and every route 404s on Vercel.
export default defineConfig({
  resolve: {
    dedupe: ["react", "react-dom", "@tanstack/react-router", "@tanstack/react-start"],
  },
  plugins: [
    tsConfigPaths({
      projects: ["./tsconfig.json"],
    }),
    tailwindcss(),
    tanstackStart({
      // Custom SSR entry (src/server.ts) instead of the framework default.
      server: { entry: "server" },
    }),
    nitro(),
    viteReact(),
  ],
});
