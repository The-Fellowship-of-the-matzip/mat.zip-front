import { ENDPOINTS } from "constants/api";

import axiosInstance from "api/axiosInstance";

// type QueryKey = {
//   size: number,
//   campusId: 1 | 2;
// }

interface Params {
  pageParam?: number;
  queryKey: any;
}

const fetchStoreRequests = async ({ pageParam = 0, queryKey }: Params) => {
  const [, { size, campusId }] = queryKey;
  const { data } = await axiosInstance.get(ENDPOINTS.STORE_REQUESTS(campusId), {
    params: { page: pageParam, size },
  });

  return { ...data, nextPageParam: pageParam + 1 };
};

export default fetchStoreRequests;
