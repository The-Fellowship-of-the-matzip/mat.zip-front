import { CampusId } from "types/common";

import { ENDPOINTS } from "constants/api";

import { axiosInstance } from "api/axiosInstance";

const sendStoreDemandPostRequest =
  (campusId: CampusId) =>
  (storeRequestData: { categoryId: string; name: string }) => {
    return axiosInstance.post(
      ENDPOINTS.STORE_REQUESTS(campusId),
      storeRequestData,
      {
        useAuth: true,
      }
    );
  };

export default sendStoreDemandPostRequest;
