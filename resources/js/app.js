import './bootstrap';


import 'alpinejs';

import { createApp }from "vue/dist/vue.esm-bundler";
import router from './router'

import GuidesIndex from '@/components/guides/GuidesIndex.vue';

createApp({
    components: {
        GuidesIndex
    }
}).use(router).mount('#app');