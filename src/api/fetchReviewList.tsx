import { ACCESS_TOKEN, ENDPOINTS } from "constants/api";

import axiosInstance from "api/axiosInstance";

export type ReviewShape = {
  id: string;
  author: {
    username: string;
    profileImage: string;
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
  const [, { restaurantId, size }] = queryKey;
  const accessToken = sessionStorage.getItem(ACCESS_TOKEN);
  const { data } = await axiosInstance.get<ReviewResponseShape>(
    ENDPOINTS.REVIEWS(restaurantId),
    {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      params: { page: pageParam, size },
    }
  );
  return { ...data, nextPageParam: pageParam + 1 };
};

export default fetchReviewList;
