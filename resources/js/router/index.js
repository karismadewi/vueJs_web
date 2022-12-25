import { createRouter, createWebHistory } from 'vue-router'

import GuidesIndex from '@/components/guides/GuidesIndex.vue'
import GuidesCreate from '@/components/guides/GuidesCreate.vue'
import GuidesEdit from '@/components/guides/GuidesEdit.vue'

import PackagesIndex from '@/components/packages/PackagesIndex.vue'
import PackagesCreate from '@/components/packages/PackagesCreate.vue'

const routes = [
    // {
    //     path: '/dashboard',
    //     name: 'guides.index',
    //     component: GuidesIndex 
    // },
    {
        path: '/guides/create',
        name: 'guides.create',
        component: GuidesCreate 
    },
    {
        path: '/dashboard',
        name: 'packages.index',
        component: PackagesIndex 
    },
    {
        path: '/packages/create',
        name: 'packages.create',
        component: PackagesCreate 
    }
];

export default createRouter({
    history: createWebHistory(),
    routes
})