import { ENDPOINTS } from "constants/api";

import axiosInstance from "api/axiosInstance";

import { Store } from "mock/data";

const fetchRandomStoreList = async (campusId: 1 | 2, size: number) => {
  const { data } = await axiosInstance.get<Store[]>(
    ENDPOINTS.RANDOM_STORES(campusId, size)
  );
  return data;
};

export default fetchRandomStoreList;
