import Vue from 'vue'  
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({  
    state: {
      user: {
        username: '',
        pass: ''
      },
      //isLoggedIn: !!localStorage.getItem(“token”)
    },
    mutations: {
      SET_USER (store, obj) {
        store.user = obj.user
      }
    }
  })
