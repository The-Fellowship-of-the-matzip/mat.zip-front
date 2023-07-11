import axios from "axios";

import { API_BASE_URL } from "constants/api";

import { checkAndSetToken, handleAPIError } from "api/utils";

export const axiosInstance = axios.create({
  baseURL: API_BASE_URL,
});

axiosInstance.interceptors.response.use((response) => response, handleAPIError);
axiosInstance.interceptors.request.use(checkAndSetToken, handleAPIError);
