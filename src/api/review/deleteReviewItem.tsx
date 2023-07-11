import { AxiosResponse } from "axios";

import { ENDPOINTS } from "constants/api";

import { axiosInstance } from "api/axiosInstance";

interface DeleteReviewItemProp {
  restaurantId: string;
  articleId: string;
}

const deleteReviewItem = async ({
  restaurantId,
  articleId,
}: DeleteReviewItemProp) => {
  const { data } = await axiosInstance.delete<AxiosResponse>(
    ENDPOINTS.DELETE_REVIEW_ITEM(restaurantId, articleId),
    {
      useAuth: true,
    }
  );

  return data;
};

export default deleteReviewItem;
