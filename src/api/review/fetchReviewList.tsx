import { FetchParamProps } from "types/apiTypes";
import { ReviewShape } from "types/common";

import { ACCESS_TOKEN, ENDPOINTS, SIZE } from "constants/api";

import { authAxiosInstance, axiosInstance } from "api/axiosInstance";

interface ReviewResponseShape {
  hasNext: boolean;
  reviews: ReviewShape[];
}

const fetchReviewList = async ({
  pageParam = 0,
  queryKey,
}: FetchParamProps) => {
  const [, { restaurantId }] = queryKey;
  const fetchOptions = {
    params: { page: pageParam, size: SIZE.REVIEW },
  };

  const axiosInstanceToUse =
    ACCESS_TOKEN === null ? axiosInstance : authAxiosInstance;

  const { data } = await axiosInstanceToUse.get<ReviewResponseShape>(
    ENDPOINTS.REVIEWS(restaurantId),
    fetchOptions
  );

  return { ...data, nextPageParam: pageParam + 1 };
};

export default fetchReviewList;
