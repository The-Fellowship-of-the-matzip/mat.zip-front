import axios from "axios";

import { ACCESS_TOKEN, API_BASE_URL } from "constants/api";

import { checkAndSetToken, handleAPIError } from "api/utils";

const axiosInstance = axios.create({
  baseURL: API_BASE_URL,
});

axiosInstance.interceptors.response.use((response) => response, handleAPIError);

export const authAxiosInstance = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    Authorization: `Bearer ${ACCESS_TOKEN}`,
  },
});

authAxiosInstance.interceptors.request.use(checkAndSetToken, handleAPIError);

export default axiosInstance;
