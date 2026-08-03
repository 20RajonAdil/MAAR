import { defineConfig } from "vite";
import viteReact from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import tsConfigPaths from "vite-tsconfig-paths";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";

// Plain TanStack Start + Vite config, standard packages only.
// Deploys to Vercel via Nitro's "vercel" preset.
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
      // Build for Vercel's serverless/edge runtime output.
      target: "vercel",
    }),
    viteReact(),
  ],
});
