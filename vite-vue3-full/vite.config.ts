import { fileURLToPath, URL } from "node:url";
import { defineConfig ,loadEnv } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
import { chunkSplitPlugin } from "vite-plugin-chunk-split";

import legacy from "@vitejs/plugin-legacy";
// api自动引入插件
import AutoImport from "unplugin-auto-import/vite";
// vue自动导入组件
import Components from "unplugin-vue-components/vite";
// 引入element-plus的自动导入配置
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";

// import viteImagemin from 'vite-plugin-imagemin';

// https://vitejs.dev/config/
export default defineConfig(( {mode}) => {
  const envDir = './env'
  const config = loadEnv(mode, envDir,'') // 不加第三个参数，只会读取VITE_开头的变量
  console.log('server',`http://${config.BACKGROUND_SERVER}`);
  return {
    envDir,
    server: {
      proxy: {
        '/api': `http://${config.BACKGROUND_SERVER}`,
      }
    },
    build: {
      cssCodeSplit: true,
    },
    optimizeDeps: {
      force: false,
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
      // splitVendorChunkPlugin(),
      chunkSplitPlugin({
        strategy: "default",
        customSplitting: {
          // `react` and `react-dom` 会被打包到一个名为`render-vendor`的 chunk 里面(包括它们的一些依赖，如 object-assign)
          "ele-vendor": ["element-plus"],
          // 源码中 utils 目录的代码都会打包进 `utils` 这个 chunk 中
          utils: [/src\/utils/],
        },
        //
      }),
      // polyfill兼容插件
      legacy({
        // 设置目标浏览器，browserslist 配置语法
        targets: ["ie >= 11"],
      })
      // viteImagemin({
      //   // 无损压缩配置，无损压缩下图片质量不会变差
      //   optipng: { optimizationLevel: 7 },
      //   // 有损压缩配置，有损压缩下图片质量可能会变差
      //   pngquant: {quality: [0.8, 0.9],},
      //   // svg 优化
      //   svgo: {
      //     plugins: [
      //       { name: 'removeViewBox' },
      //       { name: 'removeEmptyAttrs', active: false }
      //     ]
      //   }
      // })
    ],
    resolve: {
      alias: {
        "@": fileURLToPath(new URL("./src", import.meta.url)),
      },
    },
  };
});
