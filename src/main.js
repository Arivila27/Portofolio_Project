import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import VueSweetalert2 from 'vue-sweetalert2'
import VueHtmlToPaper from 'vue-html-to-paper';
import VueCurrencyFilter from 'vue-currency-filter'
import VueNumeric from 'vue-numeric'
import API from './api.config'
import VueFormWizard from 'vue-form-wizard';
import 'vue-form-wizard/dist/vue-form-wizard.min.css';
import { VuejsDatatableFactory } from 'vuejs-datatable';
import ImageUploader from "vue-image-upload-resize";
import VueGoogleCharts from 'vue-google-charts'
import VueCreditCard from '@fracto/vue-credit-card';

import JwPagination from 'jw-vue-pagination';

Vue.use('jw-pagination', JwPagination);

Vue.use(VueCreditCard);




Vue.use(VuejsDatatableFactory);

Vue.use(ImageUploader);


Vue.use(VueGoogleCharts);

Vue.use('vue-credit-card', VueCreditCard);


const options = {
    name: '_blank',
    specs: [
        'fullscreen=yes',
        'titlebar=yes',
        'scrollbars=yes'
    ],
    styles: [
        'https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css',
        'https://unpkg.com/kidlat-css/css/kidlat.css'
    ]
}

Vue.prototype.$API = API;



Vue.use(VueFormWizard);

Vue.use(VueNumeric);

Vue.use(VueHtmlToPaper, options);

Vue.use(VueSweetalert2);

Vue.use(VueCurrencyFilter, {
    symbol: 'Rp.',
    thousandsSeparator: '.',
    fractionCount: 0,
    fractionSeparator: ',',
    symbolPosition: 'front',
    symbolSpacing: true
})


Vue.prototype.$http = axios;

const token = localStorage.getItem('token');
if (token) {
    Vue.prototype.$http.defaults.headers.common['Authorization'] = token
}


Vue.config.productionTip = false;

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')