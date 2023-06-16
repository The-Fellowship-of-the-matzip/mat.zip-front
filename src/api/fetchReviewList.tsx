import { FetchParamProps } from "types/apiTypes";
import { ReviewShape } from "types/commonTypes";

import { ACCESS_TOKEN, ENDPOINTS, SIZE } from "constants/api";

import axiosInstance from "api/axiosInstance";

interface ReviewResponseShape {
  hasNext: boolean;
  reviews: ReviewShape[];
}

const fetchReviewList = async ({
  pageParam = 0,
  queryKey,
}: FetchParamProps) => {
  const [, { restaurantId }] = queryKey;
  const accessToken = sessionStorage.getItem(ACCESS_TOKEN);

  const nonUserFetchOptions = {
    params: { page: pageParam, size: SIZE.REVIEW },
  };

  const userFetchOptions = {
    ...nonUserFetchOptions,
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  };

  const { data } = await axiosInstance.get<ReviewResponseShape>(
    ENDPOINTS.REVIEWS(restaurantId),
    accessToken === null ? nonUserFetchOptions : userFetchOptions
  );
  return { ...data, nextPageParam: pageParam + 1 };
};

export default fetchReviewList;
