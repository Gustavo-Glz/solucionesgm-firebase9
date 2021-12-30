import db from '@/plugins/firebase'
import { collection, addDoc } from 'firebase/firestore'
export const strict = false

export const state = () => ({
    productos: [],
    productosDestacados: [],
})

export const mutations = {}

export const actions = {
}

export const getters = {}