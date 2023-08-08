import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"

import '@/assets/styles.css'

import jQuery from 'jquery';
window.$ = window.jQuery = jQuery;


/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core';


/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';


/* add solid style icons to the library */
library.add(fas);


createApp(App).component('font-awesome-icon', FontAwesomeIcon).use(store).use(router).mount('#app')
