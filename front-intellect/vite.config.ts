// import { defineConfig } from 'vite'
// import vue from '@vitejs/plugin-vue'

// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [vue()]
// })

// import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import envCompatible from "vite-plugin-env-compatible";

// // https://vitejs.dev/config/
// export default defineConfig({

// });

export default ({ command }) => {
  if (command === "serve") {
    return {
      plugins: [vue(), envCompatible()],
      resolve: {
        alias: [{ find: "@", replacement: "/src" }],
      },
      server: {
        host: true,
        port: 3000,
        hmr: { clientPort: 80 },
      },
    };
  } else if (command === "build") {
    return {
      plugins: [vue(), envCompatible()],
      resolve: {
        alias: [{ find: "@", replacement: "/src" }],
      },
      server: {
        host: "0.0.0.0",
        port: 5000,
        https: true,
        hmr: { host: "https://intellect.alvitre.com.br", port: 443 },
      },
      build: {
        chunkSizeWarningLimit: 2000,
      },
    };
  } else if (command === "testbuild") {
    return {
      plugins: [vue(), envCompatible()],
      resolve: {
        alias: [{ find: "@", replacement: "/src" }],
      },
      server: {
        host: "0.0.0.0",
        port: 5000,
        https: true,
        hmr: { host: "http://frontintellect.localhost", port: 443 },
      },
      build: {
        chunkSizeWarningLimit: 2000,
      },
    };
  }
};
