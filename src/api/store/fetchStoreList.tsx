import { FetchParamProps } from "types/apiTypes";
import { CampusId, Store } from "types/common";

import { ACCESS_TOKEN_KEY, ENDPOINTS } from "constants/api";

import { axiosInstance } from "api/axiosInstance";

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
  const accessToken = window.sessionStorage.getItem(ACCESS_TOKEN_KEY);
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
    useAuth: true,
  };

  const { data } = await axiosInstance.get<CategoryStoreListResponse>(
    ENDPOINTS.STORE_LIST(campusId, type),
    accessToken ? userFetchOptions : nonUserFetchOptions
  );

  return { ...data, nextPageParam: pageParam + 1 };
};

export default fetchStoreList;
