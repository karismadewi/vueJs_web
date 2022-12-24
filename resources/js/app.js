require('./bootstrap');

require('alpinejs');

import { createApp } from 'vue';
import router from './router'

import GuidesIndex from '@/components/guides/GuidesIndex.vue';

createApp({
    components: {
        GuidesIndex
    }
}).use(router).mount('#app')

