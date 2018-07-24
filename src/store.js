import Vue from 'vue'
import Vuex from 'vuex'
import http from '@/service/http'

Vue.use(Vuex)

let store = new Vuex.Store({
  state: {
    polls: null
  },

  mutations: {
    gotPolls (state, polls) {
      state.polls = polls
    }
  },

  actions: {
    async getPolls ({commit}) {
      try {
        const res = await http.get('/polling-list')
        commit('gotPolls', res)
      } catch (e) {}
    },

    async submitAnswer ({commit}, {pollId, answerIds}) {
      try {
        return http.post('/submit-answer', {
          pollId, answerIds
        })
      } catch (e) {}
    }
  }
})

export default store
