import { CampusId, Store } from "types/common";

import { ACCESS_TOKEN_KEY, ENDPOINTS } from "constants/api";

import { axiosInstance } from "api/axiosInstance";

const fetchRandomStoreList = async (campusId: CampusId, size: number) => {
  const accessToken = window.sessionStorage.getItem(ACCESS_TOKEN_KEY);

  const { data } = await axiosInstance.get<Store[]>(
    ENDPOINTS.RANDOM_STORES(campusId, size),
    {
      useAuth: !!accessToken,
    }
  );

  return data;
};

export default fetchRandomStoreList;
