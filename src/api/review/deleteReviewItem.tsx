import { AxiosResponse } from "axios";

import { ACCESS_TOKEN, ACCESS_TOKEN_KEY, ENDPOINTS } from "constants/api";

import axiosInstance from "api/axiosInstance";

interface DeleteReviewItemProp {
  restaurantId: string;
  articleId: string;
}

const deleteReviewItem = async ({
  restaurantId,
  articleId,
}: DeleteReviewItemProp) => {
  if (!ACCESS_TOKEN) {
    window.sessionStorage.removeItem(ACCESS_TOKEN_KEY);
    window.alert("다시 로그인 해주세요");
    window.location.reload();
    return;
  }

  const { data } = await axiosInstance.delete<AxiosResponse>(
    ENDPOINTS.DELETE_REVIEW_ITEM(restaurantId, articleId),
    {
      headers: {
        Authorization: `Bearer ${ACCESS_TOKEN}`,
      },
    }
  );

  return data;
};

export default deleteReviewItem;
