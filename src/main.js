import Vue from 'vue'
import app from './App.vue'

import vuerouter from 'vue-router'

import  './lib/mui/css/mui.min.css'
import { Header } from 'mint-ui'

Vue.use(vuerouter)
import "./lib/mui/mui/css/icons-extra.css"

import { Swipe, SwipeItem } from 'mint-ui';

Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);

import router from './router.js'

Vue.component(Header.name,Header)



var vm = new Vue({
    el:"#app",
   render:c => c(app),
   router
})