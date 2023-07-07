import type { AxiosRequestConfig } from "axios";

import { ACCESS_TOKEN, ACCESS_TOKEN_KEY } from "constants/api";

export const checkAndSetToken = (config: AxiosRequestConfig) => {
  if (!config.headers || !Object.hasOwn(config.headers, "Authorization")) {
    return config;
  }

  if (!ACCESS_TOKEN) {
    window.sessionStorage.removeItem(ACCESS_TOKEN_KEY);
    window.alert("다시 로그인 해주세요");
    window.location.reload();
    throw new Error("엑세스토큰이 유효하지 않습니다");
  }

  config.headers.Authorization = `Bearer ${ACCESS_TOKEN}`;

  return config;
};
