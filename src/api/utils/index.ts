import type { AxiosError, AxiosRequestConfig } from "axios";

import { ACCESS_TOKEN_KEY } from "constants/api";

export const checkAndSetToken = (config: AxiosRequestConfig) => {
  if (!config.headers || !config.useAuth) {
    return config;
  }

  const accessToken = window.sessionStorage.getItem(ACCESS_TOKEN_KEY);

  if (accessToken === null) {
    window.sessionStorage.removeItem(ACCESS_TOKEN_KEY);
    window.alert("다시 로그인 해주세요");
    window.location.reload();
    throw new Error("엑세스토큰이 유효하지 않습니다");
  }

  config.headers.Authorization = `Bearer ${accessToken}`;

  return config;
};

interface ErrorResponseData {
  message?: string;
}

export const handleAPIError = (error: AxiosError<ErrorResponseData>) => {
  if (!error.response) throw Error("에러가 발생했습니다.");

  const { data } = error.response;

  throw Error(data.message);
};
