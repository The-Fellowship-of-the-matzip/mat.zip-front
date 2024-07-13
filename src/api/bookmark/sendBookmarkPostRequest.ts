import { ACCESS_TOKEN, ENDPOINTS } from "constants/api";
import { MESSAGES } from "constants/messages";

import axiosInstance from "api/axiosInstance";

const sendBookmarkPostRequest = (restaurantId: number) => {
  const accessToken = window.sessionStorage.getItem(ACCESS_TOKEN);

  if (!accessToken) {
    throw new Error(MESSAGES.LOGIN_REQUIRED);
  }

  return axiosInstance.post(ENDPOINTS.BOOKMARK_STORE(restaurantId), null, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
};

export default sendBookmarkPostRequest;
