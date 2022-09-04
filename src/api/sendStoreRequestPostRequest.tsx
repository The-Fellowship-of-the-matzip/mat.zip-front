import { ENDPOINTS } from "constants/api";

import axiosInstance from "api/axiosInstance";

export type StoreRequestShape = Pick<StoreRequest, "categoryId" | "name">;

const sendStoreRequestPostRequest =
  (campusId: 1 | 2) =>
  (storeRequestData: { categoryId: string; name: string }) => {
    const accessToken = window.sessionStorage.getItem("accessToken") as string;
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
