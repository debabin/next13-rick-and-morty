import axios from 'axios';

export const api = axios.create({
  validateStatus: (status) => status >= 200 && status < 500,
  baseURL: 'https://rickandmortyapi.com/api/'
});
