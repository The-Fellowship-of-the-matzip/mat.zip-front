import { FetchParamProps } from 'types/apiTypes';
import type { UserReview } from 'types/common';

import { ACCESS_TOKEN, ENDPOINTS, SIZE } from 'constants/api';

import axiosInstance from 'api/axiosInstance';
import { MESSAGES } from 'constants/messages';

interface UserReviewResponse {
  hasNext: boolean;
  reviews: UserReview[];
}

const fetchUserReviewList = async ({ pageParam = 0 }: FetchParamProps) => {
  const accessToken = window.sessionStorage.getItem(ACCESS_TOKEN);

  if (!accessToken) {
    window.sessionStorage.removeItem(ACCESS_TOKEN);
    throw new Error(MESSAGES.LOGIN_RETRY);
  }

  const { data } = await axiosInstance.get<UserReviewResponse>(ENDPOINTS.USER_REVIEWS, {
    params: { page: pageParam, size: SIZE.REVIEW },
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });

  return { ...data, nextPageParam: pageParam + 1 };
};

export default fetchUserReviewList;
