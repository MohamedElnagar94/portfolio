import Vue from 'vue'
import Router from 'vue-router'
import store from "../store/index";
Vue.use(Router)

// Containers
const TheContainer = () => import('../containers/Front/TheContainer')

// Views Front
const Home = () => import('../views/Front/Home.vue')
const AboutUs = () => import('../views/Front/About.vue')
const Resume = () => import('../views/Front/Resume.vue')
const Services = () => import('../views/Front/Services.vue')
const Projects = () => import('../views/Front/Projects.vue')
const ContactUs = () => import('../views/Front/ContactUs.vue')

const router =  new Router({
    mode: 'hash', // https://router.vuejs.org/api/#mode
    scrollBehavior: () => ({y: 0}),
    routes: configRoutes()
})
router.beforeEach((to, from, next)=>{
    store.state.showLoading = true
    store.state.showNav = false
    document.documentElement.style.overflow = 'auto'
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
                {
                    path: '/resume',
                    name: 'Resume',
                    component: Resume
                },
                {
                    path: '/services',
                    name: 'Services',
                    component: Services
                },
                {
                    path: '/projects',
                    name: 'projects',
                    component: Projects
                },
                {
                    path: '/contact-us',
                    name: 'ContactUs',
                    component: ContactUs
                },
            ]
        }
    ]
}


export default router;
