import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)

export default new Vuex.Store({
  strict: true,
  state: {
    user: null,
    token: null,
    isLogged: false,
    choice: 'A'
  },
  mutations: {
    setToken (state, token) {
      state.token = token
      if (state.token) {
        state.isLogged = true
      } else {
        state.isLogged = false
      }
    },
    setUser (state, user) {
      state.user = user
    },
    setChoice (state, choice) {
      state.choice = choice
    }
  },
  actions: {
    setToken ({commit}, token) {
      commit('setToken', token)
    },
    setUser ({commit}, user) {
      commit('setUser', user)
    },
    setChoice ({commit}, choice) {
      commit('setChoice', choice)
    }

  }
})
