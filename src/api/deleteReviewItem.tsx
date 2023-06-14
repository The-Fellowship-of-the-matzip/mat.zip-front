import { AxiosResponse } from "axios";

import { ACCESS_TOKEN, ENDPOINTS } from "constants/api";

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
    window.sessionStorage.removeItem(ACCESS_TOKEN);
    window.alert("다시 로그인 해주세요");
    window.location.reload();
    return;
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
