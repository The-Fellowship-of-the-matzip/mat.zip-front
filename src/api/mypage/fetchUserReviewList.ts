import { FetchParamProps } from "types/apiTypes";
import type { UserReview } from "types/common";

import { ENDPOINTS, SIZE } from "constants/api";

import { authAxiosInstance } from "api/axiosInstance";

interface UserReviewResponse {
  hasNext: boolean;
  reviews: UserReview[];
}

const fetchUserReviewList = async ({ pageParam = 0 }: FetchParamProps) => {
  const { data } = await authAxiosInstance.get<UserReviewResponse>(
    ENDPOINTS.USER_REVIEWS,
    {
      params: { page: pageParam, size: SIZE.REVIEW },
    }
  );

  return { ...data, nextPageParam: pageParam + 1 };
};

export default fetchUserReviewList;
