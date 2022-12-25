<template>   
    <div class="flex mb-4 place-content-end">
        <div class="px-4 py-2 text-white bg-indigo-600 cursor-pointer hover:bg-indigo-700">
            <router-link :to="{ name: 'packages.create'}" class="text-sm font-medium">Create Package</router-link>
        </div>
       
    </div>   
    <div class="min-w-full overflow-hidden overflow-x-auto align-middle sm:rounded-md">
    <table class="min-w-full border divide-y divide-gray-200 table-auto">
        <thead>
        <tr>
            <th class="px-6 py-3 bg-gray-50">
                <span
                    class="text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase">Title</span>
            </th>
            <th class="px-6 py-3 bg-gray-50">
                <span
                    class="text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase">Price</span>
            </th>
            <th class="px-6 py-3 bg-gray-50">
                <span
                    class="text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase">Include</span>
            </th>
            <th class="px-6 py-3 bg-gray-50">
            </th>
            
        </tr>
        </thead>

        <tbody class="bg-white divide-y divide-gray-200 divide-solid">
        <template v-for="item in packages" :key="item.id_pk">
            <tr class="bg-white">
                <td class="px-6 py-4 text-sm leading-5 text-gray-900 whitespace-no-wrap">
                    {{ item.title }}
                </td>
                <td class="px-6 py-4 text-sm leading-5 text-gray-900 whitespace-no-wrap">
                    {{ item.price }}
                </td>
                <td class="px-6 py-4 text-sm leading-5 text-gray-900 whitespace-no-wrap">
                    {{ item.include }}
                </td>
                <td class="px-6 py-4 text-sm leading-5 text-gray-900 whitespace-no-wrap">
                    <button @click="deletePackage(item.id_pk)" class="inline-flex items-center px-4 py-2 text-xs font-semibold tracking-widest text-white uppercase transition duration-150 ease-in-out bg-gray-800 border border-transparent rounded-md hover:bg-gray-700 active:bg-gray-900 focus:outline-none focus:border-gray-900 focus:ring ring-gray-300 disabled:opacity-25">
                        Delete
                    </button>
                </td>
            </tr>
        </template>
        </tbody>
    </table>
</div>
</template>

<script>

import usePackages from "../../composables/packages";
import {onMounted} from "vue";

export default{
setup(){
    const {packages, getPackages, destroyPackage} = usePackages()

    onMounted(getPackages)

    const deletePackage = async (id_pk) => {
        if (!window.confirm('You sure?')) {
            return
        }
        await destroyPackage(id_pk)
        await getPackages()
    }

    return{
        packages,
        deletePackage,
        
    }

}
}

</script>



