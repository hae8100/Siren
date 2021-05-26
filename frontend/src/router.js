
import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);


import OrderManager from "./components/OrderManager"
import ProductManager from "./components/ProductManager"

import ProductManager from "./components/ProductManager"


import Report from "./components/report"
export default new Router({
    // mode: 'history',
    base: process.env.BASE_URL,
    routes: [
            {
                path: '/Order',
                name: 'OrderManager',
                component: OrderManager
            },
            {
                path: '/Product',
                name: 'ProductManager',
                component: ProductManager
            },

            {
                path: '/Product',
                name: 'ProductManager',
                component: ProductManager
            },


            {
                path: '/report',
                name: 'report',
                component: report
            },


    ]
})
