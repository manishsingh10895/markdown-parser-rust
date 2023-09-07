import { defineConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";
import wasm from "vite-plugin-wasm";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/markdown-parser-rust/",
  plugins: [wasm(), svelte()],
  build: {
    target: "esnext",
    outDir: "../docs",
  },
});
