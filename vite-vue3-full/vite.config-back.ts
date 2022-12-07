import { defineConfig } from "vite";
import { chunkSplitPlugin } from 'vite-plugin-chunk-split';
export default defineConfig({
  plugins: [
    chunkSplitPlugin({
      strategy: 'default',
      customSplitting: {
        // `react` and `react-dom` 会被打包到一个名为`render-vendor`的 chunk 里面(包括它们的一些依赖，如 object-assign)
        'ele-vendor': ['element-plus'],
        // 源码中 utils 目录的代码都会打包进 `utils` 这个 chunk 中
        'utils': [/src\/utils/]
      }
    })
  ]
});
