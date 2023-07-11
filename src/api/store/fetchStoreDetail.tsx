import { Store } from "types/common";

import { ACCESS_TOKEN_KEY, ENDPOINTS } from "constants/api";

import { axiosInstance } from "api/axiosInstance";

const fetchStoreDetail = async (restaurantId: string) => {
  const accessToken = window.sessionStorage.getItem(ACCESS_TOKEN_KEY);

  const { data } = await axiosInstance.get<Store & { address: string }>(
    ENDPOINTS.STORE_DETAIL(restaurantId),
    {
      useAuth: !!accessToken,
    }
  );

  return data;
};

export default fetchStoreDetail;
