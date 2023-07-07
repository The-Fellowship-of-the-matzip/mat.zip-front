import { ENDPOINTS } from "constants/api";

import { authAxiosInstance } from "api/axiosInstance";

const sendBookmarkDeleteRequest = (restaurantId: number) => () => {
  return authAxiosInstance.delete(ENDPOINTS.BOOKMARK_STORE(restaurantId));
};

export default sendBookmarkDeleteRequest;
