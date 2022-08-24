import { http } from './config'

export default {
  listarProdutos: (id) => {
    return http.get(`/${id}`)
  },
  produtoId: (id) => {
    return http.get(`items/${id}`)
  },
  apagarProduto: (id) => {
    return http.delete(`items/${id}`)
  },
  editarProduto: (produto) => {
    return http.put(`items`, produto)
  },
  cadastrarProduto: (produto) => {
    return http.post(`items`, produto)
  }
}