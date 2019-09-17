import Vue from 'vue';
import App from './App.vue';
import store from './store/';

import VueScrollTo from 'vue-scrollto';
Vue.use(VueScrollTo);

import VueScrollactive from 'vue-scrollactive';
Vue.use(VueScrollactive);

import Viewer from 'v-viewer';
Vue.use(Viewer);

import elemModal from '@/components/elems/modal/Modal';
Vue.component('elem-modal', elemModal);

Vue.config.productionTip = false;

new Vue({
  store,
  render: h => h(App)
}).$mount('#app');
