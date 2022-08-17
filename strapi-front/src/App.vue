<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <StoreItem/>
</template>

<script>
import StoreItem from './components/StoreItem.vue'
// import StoreItem from './components/StoreItem.vue';

export default {
  name: 'App',
  components: {
    StoreItem
}
}
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
