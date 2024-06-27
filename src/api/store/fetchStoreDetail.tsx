import { Store, StoreServerResponse } from "types/common";

import { ACCESS_TOKEN, ENDPOINTS } from "constants/api";

import axiosInstance from "api/axiosInstance";

const fetchStoreDetail = async (restaurantId: string): Promise<Store> => {
  const accessToken = sessionStorage.getItem(ACCESS_TOKEN);

  const userFetchOptions = {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  };

  const { data } = await axiosInstance.get<StoreServerResponse>(
    ENDPOINTS.STORE_DETAIL(restaurantId),
    accessToken ? userFetchOptions : undefined
  );

  const formattedData: Store = {
    ...data,
    thumbnailUrl: data.imageUrl,
  };

  return formattedData;
};

export default fetchStoreDetail;
