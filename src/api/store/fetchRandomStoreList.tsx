import { CampusId, Store } from "types/common";

import { ACCESS_TOKEN, ENDPOINTS } from "constants/api";

import axiosInstance from "api/axiosInstance";

const fetchRandomStoreList = async (campusId: CampusId, size: number) => {
  const accessToken = sessionStorage.getItem(ACCESS_TOKEN);

  const userFetchOptions = {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  };

  const { data } = await axiosInstance.get<Store[]>(
    ENDPOINTS.RANDOM_STORES(campusId, size),
    accessToken ? userFetchOptions : undefined
  );

  return data;
};

export default fetchRandomStoreList;
