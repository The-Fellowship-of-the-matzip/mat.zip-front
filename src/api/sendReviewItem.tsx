import { AxiosResponse } from "axios";

import { ENDPOINTS } from "constants/api";

import axiosInstance from "api/axiosInstance";

interface SendReviewItemProp {
  restaurantId: string;
  articleId: string;
  content: string;
  rating: number;
  menu: string;
}

const sendReviewItem = async (reviewItem: SendReviewItemProp) => {
  const accessToken = window.sessionStorage.getItem("accessToken") as string;
  const { data } = await axiosInstance.put<AxiosResponse>(
    ENDPOINTS.UPDATE_REVIEW_ITEM(reviewItem.restaurantId, reviewItem.articleId),
    {
      content: reviewItem.content,
      rating: reviewItem.rating,
      menu: reviewItem.menu,
    },
    {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    }
  );
  return data;
};

export default sendReviewItem;
