import {createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Wallet from '../views/Wallet.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            component: Home
        },
        {
            path: '/wallet',
            component: () => import('../views/Wallet.vue')
        }
    ]
})

export default router