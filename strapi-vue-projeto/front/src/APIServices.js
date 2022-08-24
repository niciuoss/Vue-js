import axios from 'axios'

const API_URL = 'http://localhost:1337';

export class APIServices{

  constructor(){

  }

  getItens() {
    const url = `${API_URL}/api/items/`;
    return axios.get(url).then(response => response.data);
  }

  getItem(id) {
    const url = `${API_URL}/api/items/${id}`;
    return axios.get(url).then(response => response.data);
  }

  createContact(items){

    const url = `${API_URL}/api/items/`;
    return axios.post(url,items);
  }

  updateContact(items){

    const url = `${API_URL}/api/items/${items.id}`;
    return axios.put(url,items);
  }

  deleteContact(items){
    const url = `${API_URL}/api/items/${items.id}`;
    return axios.delete(url);
  }

}
