import Vue from 'vue'
import App from './App.vue'
import elementUI from 'element-ui'
import 'u-reset.css'
import 'element-ui/lib/theme-chalk/index.css'
import router from './router'
import store from './store'
import echarts from 'echarts'
import vCharts from 'v-charts'
import Axios from 'axios'    //发请求
Vue.prototype.$http=Axios;
//过滤
import * as filter from './guolv'

Vue.config.productionTip = false;
Vue.use(elementUI);
Vue.use(echarts);
Vue.use(vCharts);

//全局过滤器引入
Object.keys(filter).forEach(key=>{
  Vue.filter(key,filter[key])
});

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
