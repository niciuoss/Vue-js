<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="Welcome to Your Vue.js App"/>
  <div>{{supermercado}}</div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import api from './services/api.ts';
import { onMounted, defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'App',
  //   components: {
  //   HelloWorld
  // },
  setup(){
    const supermercado = ref([]);
    
    const nomeItens = async () => api.get("/").then((response)=> 
    (supermercado.value = response.data.results));

    onMounted(nomeItens);

    return {supermercado};
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
