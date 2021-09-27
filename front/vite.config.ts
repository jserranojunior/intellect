// import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import envCompatible from "vite-plugin-env-compatible";

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export default ({ command }) => {
  if (command === "serve") {
    return {
      plugins: [vue(), envCompatible()],
      resolve: {
        alias: [{ find: "@", replacement: "/src" }],
      },
      server: {
        host: "0.0.0.0",
        port: 3000,
        hmr: { host: "frontintellect.localhost", port: 80 },
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
        port: 4010,
        https: true,
        hmr: { host: "intellect.alvitre.com.br", port: 443 },
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
        hmr: { host: "frontintellect.localhost", port: 80 },
      },
      build: {
        chunkSizeWarningLimit: 2000,
      },
    };
  }
};
