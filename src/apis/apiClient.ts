import axios, {AxiosError, AxiosRequestConfig} from "axios";
import { URL_PATH } from "@/constant";
import {deleteSession} from "@/utils/LoginStorage.ts";

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
      (error: AxiosError<{ msg?: string }>) => {
        if (error.response?.status === 401) {
          deleteSession()
          window.location.href = `${URL_PATH.login}`;
        }

        return Promise.reject(new Error(error.response?.data.msg || "알 수 없는 오류가 발생했습니다."));
      }
  );
};

setupInterceptors();
