import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig(({ command }) => ({
  plugins: [react()],
  // Use the root URL locally; keep the GitHub Pages subpath for production builds.
  base: command === 'serve' ? '/' : '/KalpanaJayapaul-Portfolio/',
  // Polling helps Vite detect edits on Windows, synced folders, and some mounted drives.
  server: {
    watch: {
      usePolling: true,
      interval: 300,
    },
  },
}))
