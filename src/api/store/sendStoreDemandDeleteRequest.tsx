import { CampusId } from "types/common";

import { ACCESS_TOKEN, ENDPOINTS } from "constants/api";
import { MESSAGES } from "constants/messages";

import { axiosInstance } from "api/axiosInstance";

const sendStoreDemandDeleteRequest =
  (campusId: CampusId, storeRequestId: string) => () => {
    if (typeof ACCESS_TOKEN !== "string") {
      throw new Error(MESSAGES.TOKEN_INVALID);
    }

    return axiosInstance.delete(
      `${ENDPOINTS.STORE_REQUESTS(campusId)}/${storeRequestId}`,
      {
        headers: {
          Authorization: `Bearer ${ACCESS_TOKEN}`,
        },
      }
    );
  };

export default sendStoreDemandDeleteRequest;
