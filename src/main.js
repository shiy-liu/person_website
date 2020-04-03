import Vue from 'vue'
import App from './App.vue'
import router from './routes/index'
import Buefy from 'buefy'
import Request from './utils/request'
import 'buefy/dist/buefy.css'
import VueI18n from 'vue-i18n' 
import './assets/font/font.css'
import echarts from 'echarts'
Vue.prototype.$echarts = echarts
Vue.config.productionTip = false
Vue.prototype.$request = Request;
Vue.use(Buefy)
Vue.use(VueI18n) 
let lang = localStorage.getItem('lang');
const i18n = new VueI18n({ 
  locale: lang ? lang : '中文', // 语言标识 
  messages: { 
    '中文': require('./assets/lang/zh'), 
    'English': require('./assets/lang/en') 
  },
  silentTranslationWarn: true
})
new Vue({
  router,
  i18n,
  render: h => h(App),
}).$mount('#app')
