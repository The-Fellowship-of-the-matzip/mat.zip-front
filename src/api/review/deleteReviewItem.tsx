import { AxiosResponse } from "axios";

import { ENDPOINTS } from "constants/api";

import { authAxiosInstance } from "api/axiosInstance";

interface DeleteReviewItemProp {
  restaurantId: string;
  articleId: string;
}

const deleteReviewItem = async ({
  restaurantId,
  articleId,
}: DeleteReviewItemProp) => {
  const { data } = await authAxiosInstance.delete<AxiosResponse>(
    ENDPOINTS.DELETE_REVIEW_ITEM(restaurantId, articleId)
  );

  return data;
};

export default deleteReviewItem;
