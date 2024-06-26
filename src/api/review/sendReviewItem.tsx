import { AxiosResponse } from "axios";

import { ACCESS_TOKEN, ENDPOINTS } from "constants/api";

import axiosInstance from "api/axiosInstance";
import { MESSAGES } from "constants/messages";

export interface SendReviewItemProps {
  restaurantId: string;
  articleId: string;
  content: string;
  rating: number;
  menu: string;
  imageUrl: string;
}

const sendReviewItem = async ({
  restaurantId,
  articleId,
  content,
  rating,
  menu,
  imageUrl,
}: SendReviewItemProps) => {
  const accessToken = window.sessionStorage.getItem(ACCESS_TOKEN);
  if (!accessToken) {
    throw new Error(MESSAGES.LOGIN_REQUIRED);
  }
  const { data } = await axiosInstance.put<AxiosResponse>(
    ENDPOINTS.UPDATE_REVIEW_ITEM(restaurantId, articleId),
    {
      content: content,
      rating: rating,
      menu: menu,
      imageUrl,
    },
    {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    },
  );
  return data;
};

export default sendReviewItem;
