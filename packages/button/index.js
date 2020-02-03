import Button from './src/mc-button'

Button.install = function (Vue) {
  Vue.component(Button.name, Button) // 注册组件
}// 提供install方法 实现按需引用

export default Button
