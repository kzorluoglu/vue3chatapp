import { createStore } from 'vuex'

export default createStore({
  state: {
    user: {
      name: '',
      room: '',
      loginDate: ''
    },
    messages: []
  },
  mutations: {
    updateUser(state, user) {
      state.user = user
    },
    addMessage(state, message) {
      state.messages.push(message);
    }
  },
  actions: {
  },
  modules: {
  }
})
