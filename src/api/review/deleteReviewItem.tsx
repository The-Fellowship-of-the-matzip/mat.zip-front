import { AxiosResponse } from "axios";

import { ACCESS_TOKEN, ENDPOINTS } from "constants/api";
import { MESSAGES } from "constants/messages";

import axiosInstance from "api/axiosInstance";

interface DeleteReviewItemProp {
  restaurantId: string;
  articleId: string;
}

const deleteReviewItem = async ({
  restaurantId,
  articleId,
}: DeleteReviewItemProp) => {
  const accessToken = window.sessionStorage.getItem(ACCESS_TOKEN);
  if (!accessToken) {
    throw new Error(MESSAGES.LOGIN_REQUIRED);
  }

  const { data } = await axiosInstance.delete<AxiosResponse>(
    ENDPOINTS.DELETE_REVIEW_ITEM(restaurantId, articleId),
    {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    }
  );
  return data;
};

export default deleteReviewItem;
