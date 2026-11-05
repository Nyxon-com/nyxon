import { copyFileSync, mkdirSync } from "node:fs";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: process.env.GITHUB_PAGES === "true" ? "/nyxon/" : "/",
  plugins: [
    react(),
    {
      name: "spa-routes",
      closeBundle() {
        copyFileSync("dist/index.html", "dist/404.html");
        mkdirSync("dist/server", { recursive: true });
        copyFileSync("dist/index.html", "dist/server/index.html");
      },
    },
  ],
});
