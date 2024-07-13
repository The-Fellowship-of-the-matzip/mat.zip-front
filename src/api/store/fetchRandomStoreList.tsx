import {
  CampusId,
  StoreItemWithHeart,
  StoreServerResponse,
} from "types/common";

import { ACCESS_TOKEN, ENDPOINTS } from "constants/api";

import axiosInstance from "api/axiosInstance";

const fetchRandomStoreList = async (
  campusId: CampusId,
  size: number
): Promise<StoreItemWithHeart[]> => {
  const accessToken = sessionStorage.getItem(ACCESS_TOKEN);

  const userFetchOptions = {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  };

  const { data } = await axiosInstance.get<StoreServerResponse[]>(
    ENDPOINTS.RANDOM_STORES(campusId, size),
    accessToken ? userFetchOptions : undefined
  );

  const formattedData: StoreItemWithHeart[] = data.map((store) => {
    return {
      ...store,
      thumbnailUrl: store.imageUrl,
    };
  });

  return formattedData;
};

export default fetchRandomStoreList;
