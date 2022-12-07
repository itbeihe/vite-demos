import { fileURLToPath, URL } from "node:url";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
import { chunkSplitPlugin } from 'vite-plugin-chunk-split';


// api自动引入插件
import AutoImport from "unplugin-auto-import/vite";
// vue自动导入组件
import Components from "unplugin-vue-components/vite";
// 引入element-plus的自动导入配置
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
  },
  build:{
    cssCodeSplit: true
  },
  optimizeDeps: {
    force: false
  },
  plugins: [
    vue(),
    vueJsx(),
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
    chunkSplitPlugin({
      strategy: 'default',
      customSplitting: {
        // `react` and `react-dom` 会被打包到一个名为`render-vendor`的 chunk 里面(包括它们的一些依赖，如 object-assign)
        'ele-vendor': ['element-plus'],
        // 源码中 utils 目录的代码都会打包进 `utils` 这个 chunk 中
        'utils': [/src\/utils/]
      }
    })
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});
