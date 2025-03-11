import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import '@yike-design/ui/es/index.less'
import './style.less'

// 引入全局方法
import { YkMessage, YkNotification } from '@yike-design/ui'
import router from './router'
import Icon from '@yike-design/ui/es/components/svg-icon'
const pinia = createPinia()
const app = createApp(App)
app.config.globalProperties.$notification = YkNotification
app.config.globalProperties.$message = YkMessage
app.
use(router).
use(Icon).
use(pinia).
mount('#app')
