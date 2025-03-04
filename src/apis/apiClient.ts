import axios, {AxiosRequestConfig} from "axios";

const BASE_URL = import.meta.env.VITE_SERVER_URL;

const defaultConfig: AxiosRequestConfig = {
  baseURL: BASE_URL,
  withCredentials: true,
};

export const client = axios.create(defaultConfig);


