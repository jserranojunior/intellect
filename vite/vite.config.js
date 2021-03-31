import { defineConfig } from "vite";
import path from "path";

// import { getAliases } from "vite-aliases";
// const aliases = getAliases();

import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: [{ find: "@", replacement: "/src" }],
  },
  server: {
    host: "0.0.0.0",
    port: "3000",
    hmr: { host: "frontintellect.localhost", port: "80" },
  },
});
