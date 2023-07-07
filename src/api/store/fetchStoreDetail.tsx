import { Store } from "types/common";

import { ACCESS_TOKEN, ENDPOINTS } from "constants/api";

import { axiosInstance } from "api/axiosInstance";

const fetchStoreDetail = async (restaurantId: string) => {
  const userFetchOptions = {
    headers: {
      Authorization: `Bearer ${ACCESS_TOKEN}`,
    },
  };

  const { data } = await axiosInstance.get<Store & { address: string }>(
    ENDPOINTS.STORE_DETAIL(restaurantId),
    ACCESS_TOKEN ? userFetchOptions : undefined
  );

  return data;
};

export default fetchStoreDetail;
