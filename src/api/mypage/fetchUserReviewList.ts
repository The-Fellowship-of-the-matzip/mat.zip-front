import { FetchParamProps } from "types/apiTypes";
import { UserReview, UserReviewServerResponse } from "types/common";

import { ACCESS_TOKEN, ENDPOINTS, SIZE } from "constants/api";
import { MESSAGES } from "constants/messages";

import axiosInstance from "api/axiosInstance";

interface UserReviewResponse {
  hasNext: boolean;
  reviews: UserReviewServerResponse[];
}

interface FetchUserReviewListResult {
  hasNext: boolean;
  nextPageParam: number;
  reviews: UserReview[];
}

const fetchUserReviewList = async ({
  pageParam = 0,
}: FetchParamProps): Promise<FetchUserReviewListResult> => {
  const accessToken = window.sessionStorage.getItem(ACCESS_TOKEN);

  if (!accessToken) {
    throw new Error(MESSAGES.LOGIN_RETRY);
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

  const formattedReviews = data.reviews.map((review) => {
    return {
      ...review,
      restaurant: {
        ...review.restaurant,
        thumbnailUrl: review.restaurant.imageUrl,
      },
    };
  });

  return {
    reviews: formattedReviews,
    hasNext: data.hasNext,
    nextPageParam: pageParam + 1,
  };
};

export default fetchUserReviewList;
