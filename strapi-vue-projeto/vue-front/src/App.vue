<template>
  <div id="app">
    <form @submit.prevent="crud">
      <div>
        <label for="nome">nome</label>
        <input name="nome" v-model="nome" placeholder="nome">
      </div>
      <br>
      <div>
        <label for="descricao">descrição</label>
        <input name="descricao" v-model="descrição" placeholder="descricao" type="password">
      </div>
      <br>
      <div>
        <label for="preco">preço</label>
        <input name="preco" v-model="preço" placeholder="preco">
      </div>
      <br>
      <div>
        <label for="categoria">categoria</label>
        <input name="categoria" v-model="categoria" placeholder="categoria">
      </div>
      <br>
      <input type="submit" value="cadastrar">
      <input type="submit" value="deletar">
      <input type="submit" value="atualizar">
    </form>
  </div>
</template>
<script>
export default {
  name: "App",
  data() {
    return {
      username: "",
      password: "",
      firstName: "",
      lastName: "",
      age: "",
      address: ""
    };
  },
  methods: {
    async login() {
      const { username, password, firstName, lastName, age, address } = this;
      const res = await fetch(
        "https://SomberHandsomePhysics--five-nine.repl.co/register",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            username,
            password,
            firstName,
            lastName,
            age,
            address
          })
        }
      );
      const data = await res.json();
      console.log(data);
    }
  }
};
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
