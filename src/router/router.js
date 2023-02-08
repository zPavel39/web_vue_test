import MainPage from './../page/MainPage.vue'
import { createRouter, createWebHistory } from "vue-router"

const routes = [
    {
        path: '/',
        component: MainPage,
    },
    {
        path: '/MainPage',
        component: MainPage,
    },
    {
        path: '/MainPage/:filter/:sort',
        component: MainPage
    },
]


const router = createRouter({
    routes,
    history: createWebHistory(process.env.BASE_URL)
})

export default router;