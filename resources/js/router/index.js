import Vue from 'vue'
import Router from 'vue-router'
import store from "../store/index";
Vue.use(Router)

// Containers
const TheContainer = () => import('../containers/Front/TheContainer')

// Views Front
const Home = () => import('../views/Front/Home.vue')
const AboutUs = () => import('../views/Front/About.vue')

const router =  new Router({
    mode: 'hash', // https://router.vuejs.org/api/#mode
    scrollBehavior: () => ({y: 0}),
    routes: configRoutes()
})
router.beforeEach((to, from, next)=>{
    store.state.showLoading = true
    next()
})
router.afterEach((to, from)=>{
    window.screenY = 0;
    window.setTimeout(() => {
        store.state.showLoading = false
    },1000)
})
function configRoutes() {
    return [
        {
            path: '/',
            redirect: '/',
            name: 'Home',
            component: TheContainer,
            children: [
                {
                    path: '/',
                    name: 'Home',
                    component: Home
                },
                {
                    path: '/about-us',
                    name: 'AboutUs',
                    component: AboutUs
                },
            ]
        }
    ]
}


export default router;
