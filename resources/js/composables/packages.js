import { ref } from 'vue'
import axios from 'axios'
import { useRouter } from 'vue-router'

export default function usePackages() {
    const paket = ref([])
    const packages = ref([])

    const errors = ref('')
    const router = useRouter()

    const getPackages = async () => {
        let response = await axios.get('/api/packages')
        packages.value = response.data.data
    }

    const getPackage = async (id_pk) => {
        let response = await axios.get(`/api/packages/${id_pk}`)
        paket.value = response.data.data
    }

    const destroyPackage = async (id_pk) => {
        await axios.delete(`/api/packages/${id_pk}`)
    }


    const storePackage = async (data) => {
        errors.value = ''
        try {
            await axios.post('/api/packages', data)
            await router.push({ name: 'packages.index' })
        } catch (e) {
            if (e.response.status === 422) {
                for (const key in e.response.data.errors) {
                    errors.value = e.response.data.errors
                }
            }
        }

    }

    const updatePackage = async (id_pk) => {
        errors.value = ''
        try {
            await axios.patch(`/api/packages/${id_pk}`, packages.value)
            await router.push({ name: 'packages.index' })
        } catch (e) {
            if (e.response.status === 422) {
                for (const key in e.response.data.errors) {
                    errors.value = e.response.data.errors
                }
            }
        }
    }

    return {
        errors,
        paket,
        packages,
        getPackage,
        getPackages,
        storePackage,
        destroyPackage,
        updatePackage
    }
}