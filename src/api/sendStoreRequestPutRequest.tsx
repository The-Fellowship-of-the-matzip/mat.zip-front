import { ENDPOINTS } from "constants/api";
import MESSAGES from "constants/messages";

import axiosInstance from "api/axiosInstance";

export type StoreRequestShape = Pick<StoreRequest, "categoryId" | "name">;

const sendStoreRequestPutRequest =
  (campusId: 1 | 2, storeRequestId: string) =>
  (storeRequestData: { categoryId: string; name: string }) => {
    const accessToken = window.sessionStorage.getItem("accessToken");

    if (typeof accessToken !== "string") {
      throw new Error(MESSAGES.TOKEN_INVALID);
    }

    return axiosInstance.put(
      `${ENDPOINTS.STORE_REQUESTS(campusId)}/${storeRequestId}`,
      storeRequestData,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );
  };

export default sendStoreRequestPutRequest;
