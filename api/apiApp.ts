import axios, { AxiosInstance } from "axios";

const BASE_URL = "https://www.giovankov.com/api";

export const apiApp: AxiosInstance = axios.create({
  baseURL: BASE_URL,
});
