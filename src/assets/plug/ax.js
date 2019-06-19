const plug = {
  install (Vue, options) {
    Vue.plug = 'plug'
    Object.defineProperty(Vue.prototype, '$plug', { value: Vue.plug })
  }
}
export default plug
