import { FetchParamProps } from "types/apiTypes";
import { CampusId, Store } from "types/common";

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

interface CategoryStoreListResponse {
  hasNext: boolean;
  restaurants: Store[];
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

const fetchStoreList = async ({ pageParam = 0, queryKey }: FetchParamProps) => {
  const accessToken = sessionStorage.getItem(ACCESS_TOKEN);
  const [, { size, filter, campusId, categoryId, name, type }] = queryKey;
  const params = generateParams({
    page: pageParam,
    size,
    filter,
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

  const { data } = await axiosInstance.get<CategoryStoreListResponse>(
    ENDPOINTS.STORE_LIST(campusId, type),
    accessToken ? userFetchOptions : nonUserFetchOptions
  );

  return { ...data, nextPageParam: pageParam + 1 };
};

export default fetchStoreList;
