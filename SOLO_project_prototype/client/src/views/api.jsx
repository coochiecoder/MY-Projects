import axios from 'axios';

const API = axios.create({
  baseURL: 'https://fakestoreapi.com/products',
});

export default API;
