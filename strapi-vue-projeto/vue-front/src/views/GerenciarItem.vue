<template>
  <div class="container mt-3">
    <div class="row">
      <div class="col">
        <p class="h3 text-success fw-bold">Gerenciador de Itens &nbsp; &nbsp;
          <router-link to="/itens/add" class="btn btn-success btn-sm"> <i class="fa fa-plus-circle"></i>Novo</router-link>
        </p>
        <form>
          <div class="container">
            <div class="row">
              <div class="col-md-6">
                <div class="row">
                  <div class="col">
                    <input type="text" class="form-control" placeholder="Procurar Nome">
                  </div>
                  <div class="col">
                    <input type="submit" class="btn btn-outline-dark">
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
  <div class="container mt-3">
    <div class="row">
      <div class="col-md-6">
        <div class="card my-2 list-group-item-success">
          <div class="cardy-body">
            <div class="row align-items-center">
              <div class="col-sm-3">
                <img src="https://www.freeiconspng.com/uploads/shipping-icon-1.png" alt="" class="item-img">
              </div>
              <div class="col-sm-7">
                <ul class="list-group">
                  <li class="list-group-item">Nome: <span class="fw-bold">Nome</span></li>
                  <li class="list-group-item">Descrição: <span class="fw-bold">Descrição</span></li>
                  <li class="list-group-item">Preço: <span class="fw-bold">Preço</span></li>
                  <li class="list-group-item">Categoria: <span class="fw-bold">Categoria</span></li>
                </ul>
              </div>
              <div class="col-sm-1 d-flex flex-column justify-content-center align-items-center">
                <router-link to="/itens/view/:itemId" class="btn btn-warning m-1">
                  <i class="fa fa-eye"></i>
                </router-link>
                <router-link to="/itens/view/:itemId" class="btn btn-primary m-1">
                  <i class="fa fa-pen"></i>
                </router-link>
                <button class="btn btn-danger m-1">
                  <i class="fa fa-trash"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default{
    name: 'GerenciarItem'
  }
</script>

<style scoped>

</style>