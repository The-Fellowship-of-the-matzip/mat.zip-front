import { CampusId } from "types/common";

import { ENDPOINTS } from "constants/api";

import { axiosInstance } from "api/axiosInstance";

const sendStoreDemandDeleteRequest =
  (campusId: CampusId, storeRequestId: string) => () => {
    return axiosInstance.delete(
      `${ENDPOINTS.STORE_REQUESTS(campusId)}/${storeRequestId}`,
      {
        useAuth: true,
      }
    );
  };

export default sendStoreDemandDeleteRequest;
