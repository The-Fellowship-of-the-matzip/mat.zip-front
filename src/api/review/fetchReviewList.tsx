import { FetchParamProps } from "types/apiTypes";
import { ReviewShape } from "types/common";

import { ACCESS_TOKEN_KEY, ENDPOINTS, SIZE } from "constants/api";

import { axiosInstance } from "api/axiosInstance";

interface ReviewResponseShape {
  hasNext: boolean;
  reviews: ReviewShape[];
}

const fetchReviewList = async ({
  pageParam = 0,
  queryKey,
}: FetchParamProps) => {
  const [, { restaurantId }] = queryKey;
  const accessToken = window.sessionStorage.getItem(ACCESS_TOKEN_KEY);

  const nonUserFetchOptions = {
    params: { page: pageParam, size: SIZE.REVIEW },
  };

  const userFetchOptions = {
    ...nonUserFetchOptions,
    useAuth: true,
  };

  const { data } = await axiosInstance.get<ReviewResponseShape>(
    ENDPOINTS.REVIEWS(restaurantId),
    accessToken ? userFetchOptions : nonUserFetchOptions
  );

  return { ...data, nextPageParam: pageParam + 1 };
};

export default fetchReviewList;
