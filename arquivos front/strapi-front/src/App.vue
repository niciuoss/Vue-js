<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="Welcome to Your Vue.js App"/>
  <div v-for="(listar,i) in supermercado" :key="i">
    <p>
      {{listar.attributes.nome}}
    </p>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import api from './services/api.ts';
import { onMounted, defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'App',

  setup(){
    const supermercado = ref([]);
    
    const nomeItens = async () => api.get("/").then((response)=> 
    (supermercado.value = response.data.data));

    onMounted(nomeItens);

    return {supermercado};
  },
  
  postItens(){
    api.post("/", {nome: 'jogo', descricao: 'item de entretenimento', preco: '23,99'}).then(()=> {
      console.log('Item cadastrado com sucesso')
    }).catch((error)=>{
      console.log(error);
    });
  }

});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
