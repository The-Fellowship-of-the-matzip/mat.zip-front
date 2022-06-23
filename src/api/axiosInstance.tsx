import axios, { AxiosError, AxiosResponse } from "axios";

import { API_BASE_URL } from "constants/api";

const axiosInstance = axios.create({
  baseURL: API_BASE_URL,
});

const handleAPIError = (error: AxiosError) => {
  const { data } = error.response as AxiosResponse;

  throw Error(data.message);
};

axiosInstance.interceptors.response.use((response) => response, handleAPIError);

export default axiosInstance;
