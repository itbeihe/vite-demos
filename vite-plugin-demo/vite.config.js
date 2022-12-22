import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vitePluginLifecycle from './plugins/vite-plugin-lifecycle'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(),vitePluginLifecycle()],
})
