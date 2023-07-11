import { FetchParamProps } from "types/apiTypes";
import type { UserReview } from "types/common";

import { ENDPOINTS, SIZE } from "constants/api";

import { axiosInstance } from "api/axiosInstance";

interface UserReviewResponse {
  hasNext: boolean;
  reviews: UserReview[];
}

const fetchUserReviewList = async ({ pageParam = 0 }: FetchParamProps) => {
  const { data } = await axiosInstance.get<UserReviewResponse>(
    ENDPOINTS.USER_REVIEWS,
    {
      useAuth: true,
      params: { page: pageParam, size: SIZE.REVIEW },
    }
  );

  return { ...data, nextPageParam: pageParam + 1 };
};

export default fetchUserReviewList;
