import { FetchParamProps } from "types/apiTypes";
import type { UserReview } from "types/common";

import { ACCESS_TOKEN, ACCESS_TOKEN_KEY, ENDPOINTS, SIZE } from "constants/api";

import axiosInstance from "api/axiosInstance";

interface UserReviewResponse {
  hasNext: boolean;
  reviews: UserReview[];
}

const fetchUserReviewList = async ({ pageParam = 0 }: FetchParamProps) => {
  if (!ACCESS_TOKEN) {
    window.sessionStorage.removeItem(ACCESS_TOKEN_KEY);
    window.alert("다시 로그인 해주세요");
    window.location.href = "/";
    throw new Error("엑세스토큰이 유효하지 않습니다");
  }

  const { data } = await axiosInstance.get<UserReviewResponse>(
    ENDPOINTS.USER_REVIEWS,
    {
      params: { page: pageParam, size: SIZE.REVIEW },
      headers: {
        Authorization: `Bearer ${ACCESS_TOKEN}`,
      },
    }
  );

  return { ...data, nextPageParam: pageParam + 1 };
};

export default fetchUserReviewList;
