import {createHotContext as __vite__createHotContext} from "/@vite/client";

import.meta.hot = __vite__createHotContext("/src/App.vue");
const _sfc_main = {
    __name: 'App',
    setup(__props, {
        expose
    }) {
        expose();
        const aa = 'aa'
        console.log(222);
        const __returned__ = {aa}
        Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false,value: true})
        return __returned__
    }
}
import { toDisplayString as _toDisplayString, openBlock as _openBlock, createElementBlock as _createElementBlock,  pushScopeId as _pushScopeId, popScopeId as _popScopeId
    } from "/node_modules/.vite/deps/vue.js?v=b7911ee9"

const _withScopeId = n => (_pushScopeId("data-v-7a7a37b1"), n = n(), _popScopeId(), n)
const _hoisted_1 = {class: "box"}

function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
    return (_openBlock(), _createElementBlock("div", _hoisted_1, _toDisplayString($setup.aa)))
}

import "/src/App.vue?t=1670336604469&vue&type=style&index=0&scoped=7a7a37b1&lang.css"

_sfc_main.__hmrId = "7a7a37b1"
typeof __VUE_HMR_RUNTIME__ !== 'undefined' && __VUE_HMR_RUNTIME__.createRecord(_sfc_main.__hmrId, _sfc_main)
import.meta.hot.accept(mod => {
    if (!mod) return
    const {
        default: updated,
        _rerender_only
    } = mod
    if (_rerender_only) {
        __VUE_HMR_RUNTIME__.rerender(updated.__hmrId, updated.render)
    } else {
        __VUE_HMR_RUNTIME__.reload(updated.__hmrId, updated)
    }
})
import _export_sfc from '/@id/__x00__plugin-vue:export-helper'

export default /*#__PURE__*/ _export_sfc(_sfc_main, [['render', _sfc_render], ['__scopeId', "data-v-7a7a37b1"],['__file', "D:/jd_work/my/vite-demos/vite-vue-js/src/App.vue"]])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sInNvdXJjZXMiOlsiRDovamRfd29yay9teS92aXRlLWRlbW9zL3ZpdGUtdnVlLWpzL3NyYy9BcHAudnVlIl0sInNvdXJjZXNDb250ZW50IjpbIjxzY3JpcHQgc2V0dXA+XHJcbmNvbnN0IGFhID0nYWEnXHJcbmNvbnNvbGUubG9nKDIyMik7XHJcbjwvc2NyaXB0PlxyXG5cclxuPHRlbXBsYXRlPlxyXG4gIDxkaXYgY2xhc3M9XCJib3hcIj57e2FhfX08L2Rpdj5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzdHlsZSBzY29wZWQ+XHJcbi5ib3h7XHJcbiAgYmFja2dyb3VuZDogIzAwZmYwMDtcclxufVxyXG48L3N0eWxlPlxyXG4iXSwibWFwcGluZ3MiOiI7Ozs7QUFBYyxDQUFDO0FBQ2YsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDZixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQzs7Ozs7Ozs7Ozs7cUJBSVgsS0FBSyxFQUFDLEtBQUs7Ozt3QkFBaEIsb0JBQTZCLE9BQTdCLFVBQTZCLG1CQUFWLFNBQUUifQ==