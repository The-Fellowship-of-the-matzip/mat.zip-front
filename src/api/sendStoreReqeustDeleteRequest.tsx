import { ENDPOINTS } from "constants/api";
import MESSAGES from "constants/messages";

import axiosInstance from "api/axiosInstance";

const sendStoreRequestDeleteRequest =
  (campusId: 1 | 2, storeRequestId: string) => () => {
    const accessToken = window.sessionStorage.getItem("accessToken");

    if (typeof accessToken !== "string") {
      throw new Error(MESSAGES.TOKEN_INVALID);
    }

    return axiosInstance.delete(
      `${ENDPOINTS.STORE_REQUESTS(campusId)}/${storeRequestId}`,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );
  };

export default sendStoreRequestDeleteRequest;
