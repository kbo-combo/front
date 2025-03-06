import axios, {AxiosError, AxiosRequestConfig} from "axios";
import {ApiError} from "@/types/apis/response.ts";

const BASE_URL = import.meta.env.VITE_SERVER_URL;

const defaultConfig: AxiosRequestConfig = {
  baseURL: BASE_URL,
  withCredentials: true,
};

export const client = axios.create(defaultConfig);


client.interceptors.response.use(
    (response) => response,
    (error: AxiosError) => {
      const status = error.response?.status ?? 500;
      const data = error.response?.data as { msg?: string };
      const message = data?.msg || "알 수 없는 오류가 발생했습니다.";

      return Promise.reject(new ApiError(message, status));
    }
);
