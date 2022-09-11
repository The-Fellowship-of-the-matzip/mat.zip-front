import { AxiosResponse } from "axios";

import { ENDPOINTS } from "constants/api";

import axiosInstance from "api/axiosInstance";

interface deleteReviewItemProp {
  restaurantId: string;
  articleId: string;
}

const deleteReviewItem = async (reviewItem: deleteReviewItemProp) => {
  const accessToken = window.sessionStorage.getItem("accessToken") as string;
  const { data } = await axiosInstance.delete<AxiosResponse>(
    ENDPOINTS.DELETE_REVIEW_ITEM(reviewItem.restaurantId, reviewItem.articleId),
    {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    }
  );
  return data;
};

export default deleteReviewItem;
