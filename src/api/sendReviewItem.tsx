import { AxiosResponse } from "axios";

import { ACCESS_TOKEN, ENDPOINTS } from "constants/api";

import axiosInstance from "api/axiosInstance";

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
  const accessToken = window.sessionStorage.getItem(ACCESS_TOKEN);
  if (!accessToken) {
    window.sessionStorage.removeItem(ACCESS_TOKEN);
    window.alert("다시 로그인 해주세요");
    window.location.reload();
    return;
  }
  const { data } = await axiosInstance.put<AxiosResponse>(
    ENDPOINTS.UPDATE_REVIEW_ITEM(restaurantId, articleId),
    {
      content: content,
      rating: rating,
      menu: menu,
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
