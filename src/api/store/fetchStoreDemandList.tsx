import { FetchParamProps } from "types/apiTypes";
import { CategoryId } from "types/common";

import { ENDPOINTS } from "constants/api";

import { axiosInstance } from "api/axiosInstance";

interface StoreDemandGetResponse {
  items: StoreItemType[];
  hasNext: boolean;
}

interface StoreItemType {
  id: number;
  categoryId: CategoryId;
  name: string;
  author: string;
  updatable: boolean;
  registered: boolean;
}

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
