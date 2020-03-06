import Vue from 'vue';
import router from './routers';
import App from './app';
import StereoDesign from '../src';

Vue.use(StereoDesign);

Vue.config.productionTip = false;

const context = new Vue({
  el: '#app',
  router,
  components: {
    App
  },
  template: '<App/>'
});

export default context;
