  <template>
    <div>Lista de itens</div>
  </template>

  <script>
    export default{
      default(){
        return {
          storeItem:[]
        }
      },
      mounted(){
        this.$store.dispatch('obterListItem').then(response => {
          this.storeItem = response;
        });
      }
    };

  </script>

  <style>

  </style>