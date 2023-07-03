import { ACCESS_TOKEN, ENDPOINTS } from "constants/api";

import axiosInstance from "api/axiosInstance";

const sendBookmarkPostRequest = (restaurantId: number) => () => {
  const accessToken = window.sessionStorage.getItem(ACCESS_TOKEN);

  if (!accessToken) {
    window.sessionStorage.removeItem(ACCESS_TOKEN);
    window.alert("로그인 해주세요");
    window.location.reload();
  }

  return axiosInstance.post(ENDPOINTS.BOOKMARK_STORE(restaurantId), null, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
};

export default sendBookmarkPostRequest;
