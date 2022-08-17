import Vue from 'vue' 
import Vuex from 'vuex'

Vue.use(Vuex)
const baseUrl = "http://localhost:1337/api/storeitems/"

export default new Vuex.Store({
  state:{
    storeItem:[]
  },
  mutations:{
    setStoreItem(state, payload){
      state.storeItem = payload
    }
  },
  actions:{
    async obterListItem({commit}){
      const url = `${baseUrl}storeitems/`
      const resposta = await fetch(url)
      const lista = resposta.json();
      console.log(lista);
      commit('setStoreItem', lista)
      return lista;
    }
  },
  getters:{
    storeItem(state){
      return state.storeItem;
    }
  }
  
})