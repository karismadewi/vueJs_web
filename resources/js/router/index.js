import { createRouter, createWebHistory } from 'vue-router'

import GuidesIndex from '@/components/guides/GuidesIndex.vue'

const routes = [
    {
        path: '/dashboard',
        name: 'guides.index',
        component: GuidesIndex 
    }
];

export default createRouter({
    history: createWebHistory(),
    routes
})