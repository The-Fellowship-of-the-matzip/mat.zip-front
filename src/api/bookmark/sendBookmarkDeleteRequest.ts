import { ENDPOINTS } from "constants/api";

import { axiosInstance } from "api/axiosInstance";

const sendBookmarkDeleteRequest = (restaurantId: number) => () => {
  return axiosInstance.delete(ENDPOINTS.BOOKMARK_STORE(restaurantId), {
    useAuth: true,
  });
};

export default sendBookmarkDeleteRequest;
