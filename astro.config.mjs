// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  prefetch: true,
  server: { port: 6789, host: true, allowedHosts: ["www.ams.lan"] },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          quietDeps: true,
          silenceDeprecations: ["import"]
        },
      },
    },
    plugins: [tailwindcss()],
  },
});
