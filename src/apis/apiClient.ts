import axios, { AxiosRequestConfig } from "axios";
import { URL_PATH } from "@/constant";

const BASE_URL = import.meta.env.VITE_SERVER_URL;

const defaultConfig: AxiosRequestConfig = {
  baseURL: BASE_URL,
  withCredentials: true,
};

export const client = axios.create(defaultConfig);

let isInterceptorSet = false;

export const setupInterceptors = () => {
  if (isInterceptorSet) return;
  isInterceptorSet = true;

  client.interceptors.response.use(
      (response) => response,
      (error) => {
        if (error.response?.status === 401) {
          window.location.href = `${URL_PATH.login}`;
        }
        return Promise.reject(error);
      }
  );
};

setupInterceptors();
