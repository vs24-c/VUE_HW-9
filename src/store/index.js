import { createStore } from 'vuex'
import { products } from '../constants/shopDate'

const store = createStore({
  state() {
    return {
      products: [],
    }
  },
  getters: {
    getProducts: ({ products }) => products,
  },
  mutations: {
    setProducts(state, val) {
      state.products = val
    },
  },
  actions: {
    loadProducts({ commit }) {
      commit('setProducts', products)
    },
  },
})

export default store
