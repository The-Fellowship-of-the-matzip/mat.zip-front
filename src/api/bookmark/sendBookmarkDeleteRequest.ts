import { ACCESS_TOKEN, ACCESS_TOKEN_KEY, ENDPOINTS } from "constants/api";

import axiosInstance from "api/axiosInstance";

const sendBookmarkDeleteRequest = (restaurantId: number) => () => {
  if (!ACCESS_TOKEN) {
    window.sessionStorage.removeItem(ACCESS_TOKEN_KEY);
    window.alert("로그인 해주세요");
    window.location.reload();
  }

  return axiosInstance.delete(ENDPOINTS.BOOKMARK_STORE(restaurantId), {
    headers: {
      Authorization: `Bearer ${ACCESS_TOKEN}`,
    },
  });
};

export default sendBookmarkDeleteRequest;
