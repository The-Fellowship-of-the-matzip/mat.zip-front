import { FetchParamProps } from "types/apiTypes";
import type { UserReview } from "types/common";

import { ACCESS_TOKEN, ENDPOINTS, SIZE } from "constants/api";
import { MESSAGES } from "constants/messages";

import axiosInstance from "api/axiosInstance";

interface UserReviewResponse {
  hasNext: boolean;
  reviews: UserReview[];
}

const fetchUserReviewList = async ({ pageParam = 0 }: FetchParamProps) => {
  const accessToken = window.sessionStorage.getItem(ACCESS_TOKEN);

  if (!accessToken) {
    throw new Error(MESSAGES.LOGIN_REQUIRED);
  }

  const { data } = await axiosInstance.get<UserReviewResponse>(
    ENDPOINTS.USER_REVIEWS,
    {
      params: { page: pageParam, size: SIZE.REVIEW },
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    }
  );

  return { ...data, nextPageParam: pageParam + 1 };
};

export default fetchUserReviewList;
