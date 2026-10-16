import path from "path"
import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import tailwindcss from "@tailwindcss/vite"

export default defineConfig({
  // served from the root of lassiwala.codespanda.com; set BASE_PATH=/repo/ to host under a sub-path instead
  base: process.env.BASE_PATH ?? "/",
  plugins: [react(), tailwindcss()],
  resolve: { alias: { "@": path.resolve(__dirname, "./src") } },
  // native file events are unreliable on this Windows drive, so poll for changes
  server: { watch: { usePolling: true, interval: 300 } },
})
