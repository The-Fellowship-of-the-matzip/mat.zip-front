import { ENDPOINTS } from "constants/api";

import { authAxiosInstance } from "api/axiosInstance";

const sendBookmarkPostRequest = (restaurantId: number) => () => {
  return authAxiosInstance.post(ENDPOINTS.BOOKMARK_STORE(restaurantId));
};

export default sendBookmarkPostRequest;
