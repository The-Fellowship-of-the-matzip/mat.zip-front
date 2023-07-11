import { CampusId } from "types/common";

import { ENDPOINTS } from "constants/api";

import { axiosInstance } from "api/axiosInstance";

const sendStoreDemandPutRequest =
  (campusId: CampusId, storeRequestId: string) =>
  (storeRequestData: { categoryId: string; name: string }) => {
    return axiosInstance.put(
      `${ENDPOINTS.STORE_REQUESTS(campusId)}/${storeRequestId}`,
      storeRequestData,
      {
        useAuth: true,
      }
    );
  };

export default sendStoreDemandPutRequest;
