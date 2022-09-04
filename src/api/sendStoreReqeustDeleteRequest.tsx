import { ENDPOINTS } from "constants/api";

import axiosInstance from "api/axiosInstance";

const sendStoreRequestDeleteRequest =
  (campusId: 1 | 2, storeRequestId: string) => () => {
    const accessToken = window.sessionStorage.getItem("accessToken") as string;
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
