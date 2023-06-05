import { ACCESS_TOKEN, ENDPOINTS, SIZE } from "constants/api";

import axiosInstance from "api/axiosInstance";

export type ReviewShape = {
  id: string;
  author: {
    username: string;
    profileImage: string;
    reviewCount: number;
    averageRating: number;
  };
  content: string;
  rating: number;
  menu: string;
  updatable: boolean;
};

type ReviewResponseShape = {
  hasNext: boolean;
  reviews: ReviewShape[];
};

type Props = {
  pageParam?: number;
  queryKey: any;
};

const fetchReviewList = async ({ pageParam = 0, queryKey }: Props) => {
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
