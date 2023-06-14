import { CampusId, Store } from "types/commonTypes";

import { ENDPOINTS } from "constants/api";

import axiosInstance from "api/axiosInstance";

type CategoryStoreListResponse = {
  hasNext: boolean;
  restaurants: Store[];
};

type Props = {
  pageParam?: number;
  queryKey: any;
};

type Params = {
  page?: number;
  size?: number;
  filter?: string;
  campusId?: 1 | 2;
  campusId?: CampusId;
  categoryId?: number;
  name?: string;
};

type ReduceReturnType = Record<string, any>;

const generateParams = (propObject: Params) =>
  Object.entries(propObject).reduce<ReduceReturnType>(
    (params, [key, value]) => {
      if (value) {
        params[key] = value;
      }
      return params;
    },
    {}
  );

const fetchStoreList = async ({ pageParam = 0, queryKey }: Props) => {
  const [, { size, filter, campusId, categoryId, name, type }] = queryKey;
  const params = generateParams({
    page: pageParam,
    size,
    filter,
    campusId,
    categoryId,
    name,
  });

  const { data } = await axiosInstance.get<CategoryStoreListResponse>(
    ENDPOINTS.STORE_LIST(campusId, type),
    { params }
  );
  return { ...data, nextPageParam: pageParam + 1 };
};

export default fetchStoreList;
