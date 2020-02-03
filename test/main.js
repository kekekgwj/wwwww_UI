import Vue from 'vue'
import App from './APP'
// 导入组件库
import wwwwwUI from '../packages'
console.log(wwwwwUI)

Vue.config.productionTip = false

/// wwwwwUI是一个Obj 会自动执行 其中的install方法
Vue.use(wwwwwUI)

new Vue({
  render: h => h(App)
}).$mount('#app')
