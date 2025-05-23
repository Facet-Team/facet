// plugins/router.js
import { createRouter, createWebHistory, createWebHashHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import Demo from '@/views/Demo.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
    },
    {
        path: '/demo',
        name: 'Demo',
        component: Demo,
    }
]

const router = createRouter({
    history: createWebHashHistory('/'),
    routes,
})

// add a contemportary fix for memory leak problem
router.beforeEach((to, from, next) => {
    if (from.name && to.fullPath !== from.fullPath) {
        window.location.hash = '#' + to.fullPath
        window.location.reload()
    } else {
        next();
    }
});

export default router 