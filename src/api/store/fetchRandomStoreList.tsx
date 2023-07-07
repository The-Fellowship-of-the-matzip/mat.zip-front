import { CampusId, Store } from "types/common";

import { ACCESS_TOKEN, ENDPOINTS } from "constants/api";

import { axiosInstance } from "api/axiosInstance";

const fetchRandomStoreList = async (campusId: CampusId, size: number) => {
  const userFetchOptions = {
    headers: {
      Authorization: `Bearer ${ACCESS_TOKEN}`,
    },
  };

  const { data } = await axiosInstance.get<Store[]>(
    ENDPOINTS.RANDOM_STORES(campusId, size),
    ACCESS_TOKEN ? userFetchOptions : undefined
  );

  return data;
};

export default fetchRandomStoreList;
