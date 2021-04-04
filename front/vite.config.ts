import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import envCompatible from 'vite-plugin-env-compatible'



// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), envCompatible()],
    resolve: {
    alias: [{ find: "@", replacement: "/src" }],
  },
    server: {
    host: "0.0.0.0",
    port: 3000,
    hmr: { host: "frontintellect.localhost", port: 80 },
  },
})

