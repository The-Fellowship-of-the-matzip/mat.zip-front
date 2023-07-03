import { Store } from "types/common";

import { ACCESS_TOKEN, ENDPOINTS } from "constants/api";

import axiosInstance from "api/axiosInstance";

const fetchStoreDetail = async (restaurantId: string) => {
  const accessToken = sessionStorage.getItem(ACCESS_TOKEN);

  const userFetchOptions = {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  };

  const { data } = await axiosInstance.get<Store & { address: string }>(
    ENDPOINTS.STORE_DETAIL(restaurantId),
    accessToken ? userFetchOptions : undefined
  );

  return data;
};

export default fetchStoreDetail;
