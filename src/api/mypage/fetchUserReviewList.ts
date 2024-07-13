import { FetchParamProps } from "types/apiTypes";
import { UserReview, UserReviewServerResponse } from "types/common";

import { ACCESS_TOKEN, ENDPOINTS, SIZE } from "constants/api";

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
    window.sessionStorage.removeItem(ACCESS_TOKEN);
    window.alert("다시 로그인 해주세요");
    window.location.href = "/";
    throw new Error("엑세스토큰이 유효하지 않습니다");
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
