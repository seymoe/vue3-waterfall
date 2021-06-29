import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import legacy from '@vitejs/plugin-legacy'
import path from 'path'

console.log('当前构建方式：', process.env.BUILD_TARGET)

const isWeb = process.env.BUILD_TARGET === 'web'

const buildForWeb = {
  target: 'es2015',
  outDir: 'docs'
}

const buildForLib = {
  lib: {
    entry: path.resolve(__dirname, 'src/lib/index.ts'),
    name: 'vue3-waterfall'
  },
  rollupOptions: {
    // 请确保外部化那些你的库中不需要的依赖
    external: ['vue'],
    output: {
      // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
      globals: {
        vue: 'Vue'
      }
    }
  }
}

// https://vitejs.dev/config/
export default defineConfig({
  base: '/vue3-waterfall/',
  plugins: [vue(), isWeb ? legacy() : null],
  build: isWeb ? buildForWeb : buildForLib
})
