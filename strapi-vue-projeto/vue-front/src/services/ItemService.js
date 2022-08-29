import axios from 'axios'

export class ItemService{
  static baseURL = `http://localhost:1337/api/`;

  static getAllItems(){ 
    let dataURL = `${this.baseURL}/items`;
    return axios.get(dataURL);
  }

  static getItems(itemId){ 
    let dataURL = `${this.baseURL}/items/${itemId}`;
    return axios.get(dataURL);
  }

  static createItem(item){
    let dataURL = `${this.baseURL}/items/`;
    return axios.post(dataURL, item);
  }

  static updateItem(item, itemId){
    let dataURL = `${this.baseURL}/items/${itemId}`;
    return axios.put(dataURL, item);
  }

  static deleteItem(itemId){
    let dataURL = `${this.baseURL}/items/`;
    return axios.delete(dataURL);
  }

  static getAllCategorias(){
    let dataURL = `${this.baseURL}/categorias?populate=items`;
    return axios.get(dataURL);
  }

  // static getCategorias(categorias){
  //   let categId = categorias.id;
  //   return axios.get(categId);
  // }
}