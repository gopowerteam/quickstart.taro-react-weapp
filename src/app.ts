import { createApp } from 'vue'
import { Button, Toast } from '@nutui/nutui-taro'

import 'windi.css'
import '@nutui/nutui-taro/dist/styles/themes/default.scss'
import './assets/styles/index.scss'

const App = createApp({
  onShow(options) {}
  // 入口组件不需要实现 render 方法，即使实现了也会被 taro 所覆盖
})

App.use(Button).use(Toast)

export default App