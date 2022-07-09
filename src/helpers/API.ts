import { EnhancedStore } from '@reduxjs/toolkit';
import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse, AxiosError } from 'axios';

/**
 * @riaddaima
 * Use the CrescendoSlot.postman_collection.json
 * to import the collection into your postman and generate a new API endpoint.
 */
const BASE_API_ENDPOINT = process.env.REACT_APP_BASE_API_ENDPOINT as string;

const defaultOptions: AxiosRequestConfig = {
  baseURL: BASE_API_ENDPOINT,
  headers: {
    'Content-Type': 'application/json',
  },
};

let API: AxiosInstance = axios.create(defaultOptions);

export const injectStore = (store: EnhancedStore) => {
  API.interceptors.request.use((config) => {
    config.headers = {
      Authorization: store.getState().auth?.token,
    };
    return config
  })

  API.interceptors.response.use(
    (response: AxiosResponse) => {
      // Any status code that lie within the range of 2xx cause this function to trigger
      return response.data;
    },
    (err: AxiosError) => {
      // Any status codes that falls outside the range of 2xx cause this function to trigger
      const status = err.response?.status || 500;
      // we can handle global errors here
      switch (status) {
        // // authentication (token related issues)
        // case 401: {
        //   return Promise.reject(new APIError(err.message, 409));
        // }
  
        // // forbidden (permission related issues)
        // case 403: {
        //   return Promise.reject(new APIError(err.message, 409));
        // }
  
        // // bad request
        // case 400: {
        //   return Promise.reject(new APIError(err.message, 400));
        // }
  
        // // not found
        // case 404: {
        //   return Promise.reject(new APIError(err.message, 404));
        // }
  
        // // conflict
        // case 409: {
        //   return Promise.reject(new APIError(err.message, 409));
        // }
  
        // // unprocessable
        // case 422: {
        //   return Promise.reject(new APIError(err.message, 422));
        // }
  
        // generic api error (server related) unexpected
        default: {
          // return Promise.reject(new APIError(err.message, 500));
          return Promise.reject(err);
        }
      }
    }
  );
}

/**
 * @riaddaima
 * You can play with interceptors to handle 404 Errors, or other type of errors.
 */



export default API;
