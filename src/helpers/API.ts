import axios from 'axios';
import { store } from '../app/store';

const BASE_API_ENDPOINT = 'http://localhost:3000/api/v1';
const state = store.getState();

// Fetch the authentication token
const fetchToken: () => String = () => {
  // Fetch it from the store!
  return state.login.jwt;
};
const API = axios.create({
  baseURL: BASE_API_ENDPOINT,
  headers: {
    Authorization: 'Bearer ' + fetchToken(),
  },
});
export default API;
