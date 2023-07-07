import { CampusId } from "types/common";

import { ACCESS_TOKEN, ENDPOINTS } from "constants/api";
import { MESSAGES } from "constants/messages";

import { axiosInstance } from "api/axiosInstance";

const sendStoreDemandPostRequest =
  (campusId: CampusId) =>
  (storeRequestData: { categoryId: string; name: string }) => {
    if (typeof ACCESS_TOKEN !== "string") {
      throw new Error(MESSAGES.TOKEN_INVALID);
    }

    return axiosInstance.post(
      ENDPOINTS.STORE_REQUESTS(campusId),
      storeRequestData,
      {
        headers: {
          Authorization: `Bearer ${ACCESS_TOKEN}`,
        },
      }
    );
  };

export default sendStoreDemandPostRequest;
