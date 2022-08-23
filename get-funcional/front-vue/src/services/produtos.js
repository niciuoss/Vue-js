import { http } from './config'

export default {
  listarProdutos: (id) => {
    return http.get(`/${id}`)
  },
  produtoId: (id) => {
    return http.get(`produto/${id}`)
  },
  apagarProduto: (id) => {
    return http.delete(`produto/${id}`)
  },
  editarProduto: (produto) => {
    return http.put(`produto`, produto)
  },
  cadastrarProduto: (produto) => {
    return http.post(`produto`, produto)
  }
}