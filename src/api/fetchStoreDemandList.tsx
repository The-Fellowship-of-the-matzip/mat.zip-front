import { FetchParamProps } from "types/apiTypes";

import { ENDPOINTS } from "constants/api";

import axiosInstance from "api/axiosInstance";

type StoreDemandGetResponse = {
  items: {
    id: number;
    categoryId: StoreDemand["categoryId"];
    name: string;
    author: string;
    updatable: boolean;
    registered: boolean;
  }[];
  hasNext: boolean;
};

const fetchStoreDemandList = async ({
  pageParam = 0,
  queryKey,
}: FetchParamProps) => {
  const [, { size, campusId }] = queryKey;
  const { data } = await axiosInstance.get<StoreDemandGetResponse>(
    ENDPOINTS.STORE_REQUESTS(campusId),
    {
      params: { page: pageParam, size },
    }
  );

  const parsedData = {
    items: data.items.map(({ id, updatable, registered, ...rest }) => ({
      id: String(id),
      isAuthor: updatable,
      isRegistered: registered,
      ...rest,
    })),
    hasNext: data.hasNext,
  };

  return { ...parsedData, nextPageParam: pageParam + 1 };
};

export default fetchStoreDemandList;
