import { ENDPOINTS } from "constants/api";
import MESSAGES from "constants/messages";

import axiosInstance from "api/axiosInstance";

export type StoreRequestShape = Pick<StoreRequest, "categoryId" | "name">;

const sendStoreRequestPostRequest =
  (campusId: 1 | 2) =>
  (storeRequestData: { categoryId: string; name: string }) => {
    const accessToken = window.sessionStorage.getItem("accessToken");

    if (typeof accessToken !== "string") {
      throw new Error(MESSAGES.TOKEN_INVALID);
    }

    return axiosInstance.post(
      ENDPOINTS.STORE_REQUESTS(campusId),
      storeRequestData,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );
  };

export default sendStoreRequestPostRequest;
