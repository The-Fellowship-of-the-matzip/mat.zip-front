import { FetchParamProps } from "types/apiTypes";
import {
  CampusId,
  StoreItemWithHeart,
  StoreServerResponse,
} from "types/common";

import { ACCESS_TOKEN, ENDPOINTS } from "constants/api";

import axiosInstance from "api/axiosInstance";

type ReduceReturnType = Record<string, any>;

interface GenerateParamsProps {
  page?: number;
  size?: number;
  filter?: string;
  campusId?: CampusId;
  categoryId?: number;
  name?: string;
}

interface CategoryStoreListServerResponse {
  hasNext: boolean;
  restaurants: StoreServerResponse[];
}

interface FetchStoreListResult {
  hasNext: boolean;
  nextPageParam: number;
  restaurants: StoreItemWithHeart[];
}

const generateParams = (propObject: GenerateParamsProps) =>
  Object.entries(propObject).reduce<ReduceReturnType>(
    (params, [key, value]) => {
      if (value) {
        params[key] = value;
      }
      return params;
    },
    {}
  );

const fetchStoreList = async ({
  pageParam = 0,
  queryKey,
}: FetchParamProps): Promise<FetchStoreListResult> => {
  const accessToken = sessionStorage.getItem(ACCESS_TOKEN);
  const [, { size, filter, campusId, categoryId, name, type }] = queryKey;

  const formattedFilterOption = filter === "basic" ? null : filter;
  const params = generateParams({
    page: pageParam,
    size,
    filter: formattedFilterOption,
    campusId,
    categoryId,
    name,
  });

  const nonUserFetchOptions = { params };

  const userFetchOptions = {
    ...nonUserFetchOptions,
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  };

  const { data } = await axiosInstance.get<CategoryStoreListServerResponse>(
    ENDPOINTS.STORE_LIST(campusId, type),
    accessToken ? userFetchOptions : nonUserFetchOptions
  );

  const formattedData: StoreItemWithHeart[] = data.restaurants.map(
    (restaurant) => {
      return {
        ...restaurant,
        thumbnailUrl: restaurant.imageUrl,
      };
    }
  );

  return {
    restaurants: formattedData,
    hasNext: data.hasNext,
    nextPageParam: pageParam + 1,
  };
};

export default fetchStoreList;
