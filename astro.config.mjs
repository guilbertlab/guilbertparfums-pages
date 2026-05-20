// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: "https://landing.guilbertparfums.com",
  image: {
    responsiveStyles: true,
  },
  vite: {
    plugins: [tailwindcss()],
    build: {
      cssMinify: "lightningcss",
    },
  },
});
