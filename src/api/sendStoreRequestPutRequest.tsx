import { ENDPOINTS } from "constants/api";

import axiosInstance from "api/axiosInstance";

export type StoreRequestShape = Pick<StoreRequest, "categoryId" | "name">;

const sendStoreRequestPutRequest =
  (campusId: 1 | 2, storeRequestId: string) =>
  (storeRequestData: { categoryId: string; name: string }) => {
    const accessToken = window.sessionStorage.getItem("accessToken") as string;
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
