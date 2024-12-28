import mdx from "@mdx-js/rollup";
import { defineConfig } from "vite";

const viteConfig = defineConfig({
  plugins: [
    mdx({
      jsxImportSource: "preact",
    }),
  ],
});

export default viteConfig;
