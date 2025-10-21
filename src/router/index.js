import { createRouter, createWebHistory} from 'vue-router'

const Home = () => import('@/views/Home.vue')
const About = () => import('@/views/About.vue')

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
    },
    {
        path: '/about',
        name: 'About',
        component: About,
    },
]

const router = createRouter({
    history: createWebHistory('/xtravault/'),
    routes,
})

export default router