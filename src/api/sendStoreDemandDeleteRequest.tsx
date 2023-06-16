import { CampusId } from "types/common";

import { ACCESS_TOKEN, ENDPOINTS } from "constants/api";
import MESSAGES from "constants/messages";

import axiosInstance from "api/axiosInstance";

const sendStoreDemandDeleteRequest =
  (campusId: CampusId, storeRequestId: string) => () => {
    const accessToken = window.sessionStorage.getItem(ACCESS_TOKEN);

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

export default sendStoreDemandDeleteRequest;
