export default function vitePluginLifecycle() {
  // const virtualModuleId = 'virtual:my-module'
  // const resolvedVirtualModuleId = '\0' + virtualModuleId
  return {
    name: 'vite-plugin-lifecycle', // 必须的，将会在 warning 和 error 中显示
    enforce: 'pre',
    options(){
      console.log('options')
    },
    buildStart(){
      console.log('buildStart')
    },
    resolveId (id, importer){
      console.log('resolveId',id)
    },
    load(id) {
      console.log('load',id)
      // if (id === resolvedVirtualModuleId) {
      //   return `export const msg = "from virtual module"`
      // }
    },
    transform(){
      console.log('transform')
    },
    buildEnd(){
      console.log('buildEnd')
    },
    closeBundle(){
      console.log('closeBundle')
    },
    // 私有钩子
    config() {
      console.log('config')
    },
    configResolved() {
      console.log('configResolved')
    },
    configureServer(){
      console.log('configureServer')
    },
    configurePreviewServer(){
      console.log('configurePreviewServer')
    },
    transformIndexHtml(){
      console.log('transformIndexHtml')
    },
    handleHotUpdate(){
      console.log('handleHotUpdate')
    },
    // rollup钩子
    moduleParsed(){
      console.log('moduleParsed')
    },
    outputOptions(){
      console.log('outputOptions')
    },
    renderStart(){
      console.log('renderStart')

    },
    renderChunk(){
      console.log('renderChunk')

    },
    augmentChunkHash(){
      console.log('augmentChunkHash')

    },
    generateBundle(){
      console.log('generateBundle')

    },
    writeBundle(){
      console.log('writeBundle')

    }
  }
}
