import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import Components from "unplugin-vue-components/vite";
import AutoImport from "unplugin-auto-import/vite";
import Pages from "vite-plugin-pages";
import UnoCSS from "unocss/vite";

import { fileURLToPath } from "url";
import { resolve } from "path";

const root = fileURLToPath(import.meta.url);
const r = (p: string) => resolve(root, "..", p);

export default defineConfig(({ command }) => ({
  define: {
    __DEV__: command === "serve",
  },
  plugins: [
    UnoCSS(),
    vue({
      script: {
        defineModel: true,
      },
    }),
    Pages(),
    AutoImport({
      imports: ["vue", "vue-router", "@vueuse/core", "pinia"],
      dirs: [
        r("src/stores"),
        r("src/utils"),
        r("src/apis"),
        r("src/composables"),
      ],
    }),
    Components(),
  ],
  resolve: {
    alias: { "@": r("src") },
  },
  test: {
    include: ["test/**/*.spec.ts"],
  },
}));
