import { ENDPOINTS } from "constants/api";

import axiosInstance from "api/axiosInstance";

import { Store } from "mock/data";

const fetchStoreDetail = async (restaurantId: string) => {
  const { data } = await axiosInstance.get<Store & { address: string }>(
    ENDPOINTS.STORE_DETAIL(restaurantId)
  );
  return data;
};

export default fetchStoreDetail;
