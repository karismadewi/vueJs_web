import { createRouter, createWebHistory } from 'vue-router'

import GuidesIndex from '@/components/guides/GuidesIndex.vue'
import GuidesCreate from '@/components/guides/GuidesCreate.vue'

const routes = [
    {
        path: '/dashboard',
        name: 'guides.index',
        component: GuidesIndex 
    },
    {
        path: '/companies/create',
        name: 'guides.create',
        component: GuidesCreate 
    }
];

export default createRouter({
    history: createWebHistory(),
    routes
})