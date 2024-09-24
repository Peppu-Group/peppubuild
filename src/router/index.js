import { createWebHistory, createRouter } from 'vue-router'

import HeadBar from '@/components/HeadBar.vue'
import FootBar from '@/components/FootBar.vue'

import HomePage from '../views/HomePage.vue'
import PricingPage from '../views/PricingPage.vue'
import HostingPage from '../views/HostingPage.vue'
import ThirdpartyPage from '../views/ThirdpartyPage.vue'
import CustomPage from '../views/CustomPage.vue'

const routes = [
    {
        path: '/head',
        component: HeadBar
    },
    {
        path: '/foot',
        component: FootBar
    },
    {
        path: '/',
        component: HomePage
    },
    {
        path: '/pricing',
        component: PricingPage
    },
    {
        path: '/hosting',
        component: HostingPage
    },
    {
        path: '/thirdparty',
        component: ThirdpartyPage
    },
    {
        path: '/custom',
        component: CustomPage
    }
]
  
  const router = createRouter({
    history: createWebHistory(),
    routes,
  })

export default router