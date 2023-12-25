import { fileURLToPath } from 'node:url'
import { resolve } from 'node:path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite'
import AutoImport from 'unplugin-auto-import/vite'
import UnoCSS from 'unocss/vite'

const root = fileURLToPath(import.meta.url)
const r = (p: string) => resolve(root, '..', p)

export default defineConfig({
  plugins: [
    UnoCSS(),
    vue({
      script: {
        defineModel: true,
      },
    }),
    AutoImport({
      imports: ['vue', 'vue-router', '@vueuse/core', 'pinia'],
      dirs: [
        r('src/stores'),
      ],
    }),
    Components(),
  ],
  resolve: {
    alias: { '@': r('src') },
  },
  test: {
    include: ['test/**/*.spec.ts'],
  },
})
