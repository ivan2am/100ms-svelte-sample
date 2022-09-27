import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'

import typescript from "@rollup/plugin-typescript";
import path from "path";


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    svelte(), typescript()
  ],
  resolve: {
    alias: {
      $components: path.resolve("./src/components"),
      $actions: path.resolve("./src/actions"),
      $lib: path.resolve("./src/lib"),
      $pages: path.resolve("./src/pages"),
      $stores: path.resolve("./src/stores"),
      $utils: path.resolve("./src/utils")
    }
  }
})