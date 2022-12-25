import { ref } from 'vue'
import axios from 'axios'
import { useRouter } from 'vue-router'

export default function useGuides() {
    const guide = ref([])
    const guides = ref([])

    const errors = ref('')
    const router = useRouter()

    const getGuides = async () => {
        let response = await axios.get('/api/guides')
        guides.value = response.data.data
    }

    const getGuide = async (id_guide) => {
        let response = await axios.get(`/api/guides/${id_guide}`)
        guide.value = response.data.data
    }

    const destroyGuide = async (id_guide) => {
        await axios.delete(`/api/guides/${id_guide}`)
    }


    const storeGuide = async (data) => {
        errors.value = ''
        try {
            await axios.post('/api/guides', data)
            await router.push({ name: 'guides.index' })
        } catch (e) {
            if (e.response.status === 422) {
                for (const key in e.response.data.errors) {
                    errors.value = e.response.data.errors
                }
            }
        }

    }

    const updateGuide = async (id_guide) => {
        errors.value = ''
        try {
            await axios.patch(`/api/guides/${id_guide}`, guides.value)
            await router.push({ name: 'guides.index' })
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
        guide,
        guides,
        getGuide,
        getGuides,
        storeGuide,
        destroyGuide,
        updateGuide
    }
}