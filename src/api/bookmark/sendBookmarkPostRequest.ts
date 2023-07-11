import { ENDPOINTS } from "constants/api";

import { axiosInstance } from "api/axiosInstance";

const sendBookmarkPostRequest = (restaurantId: number) => () => {
  return axiosInstance.post(ENDPOINTS.BOOKMARK_STORE(restaurantId), {
    useAuth: true,
  });
};

export default sendBookmarkPostRequest;
