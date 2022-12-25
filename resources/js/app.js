import './bootstrap';
import 'alpinejs';

import { createApp }from "vue/dist/vue.esm-bundler";
import router from './router'

import GuidesIndex from '@/components/guides/GuidesIndex.vue';
import PackagesIndex from '@/components/packages/PackagesIndex.vue';

createApp({
    components: {
        GuidesIndex,
        PackagesIndex,

    }
}).use(router).mount('#app');