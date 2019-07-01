// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import './assets/css/init.css'



Vue.config.productionTip = false



import VueI18n from 'vue-i18n'
Vue.use(VueI18n);
const i18n = new VueI18n({
    locale: 'zh',  // 语言标识
    messages: {
        'zh': require('./lang/zh'),
        'en': require('./lang/en')
    }
})

//全屏滚动 vueAwesomeSwiper
import 'swiper/dist/css/swiper.css'
import vueAwesomeSwiper from 'vue-awesome-swiper'
Vue.use(vueAwesomeSwiper);



/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  i18n,
  components: { App },
  template: '<App/>'
})
