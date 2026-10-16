import path from "path"
import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import tailwindcss from "@tailwindcss/vite"

export default defineConfig({
  // GitHub Pages serves the site from /<repo>/
  base: process.env.GITHUB_PAGES ? "/lassiwala/" : "/",
  plugins: [react(), tailwindcss()],
  resolve: { alias: { "@": path.resolve(__dirname, "./src") } },
  // native file events are unreliable on this Windows drive, so poll for changes
  server: { watch: { usePolling: true, interval: 300 } },
})
