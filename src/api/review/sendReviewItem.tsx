import { AxiosResponse } from "axios";

import { ENDPOINTS } from "constants/api";

import { authAxiosInstance } from "api/axiosInstance";

interface SendReviewItemProps {
  restaurantId: string;
  articleId: string;
  content: string;
  rating: number;
  menu: string;
}

const sendReviewItem = async ({
  restaurantId,
  articleId,
  content,
  rating,
  menu,
}: SendReviewItemProps) => {
  const { data } = await authAxiosInstance.put<AxiosResponse>(
    ENDPOINTS.UPDATE_REVIEW_ITEM(restaurantId, articleId),
    {
      content: content,
      rating: rating,
      menu: menu,
    }
  );

  return data;
};

export default sendReviewItem;
