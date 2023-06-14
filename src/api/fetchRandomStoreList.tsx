import { CampusId, Store } from "types/commonTypes";

import { ENDPOINTS } from "constants/api";

import axiosInstance from "api/axiosInstance";

const fetchRandomStoreList = async (campusId: CampusId, size: number) => {
  const { data } = await axiosInstance.get<Store[]>(
    ENDPOINTS.RANDOM_STORES(campusId, size)
  );
  return data;
};

export default fetchRandomStoreList;
