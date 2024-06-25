import { ReviewInputShape } from "types/common";

import { ACCESS_TOKEN, ENDPOINTS } from "constants/api";

import axiosInstance from "api/axiosInstance";

const sendReviewPostRequest =
  (restaurantId: string) => (newReview: ReviewInputShape) => {
    const accessToken = window.sessionStorage.getItem(ACCESS_TOKEN);
    if (!accessToken) {
      throw new Error("다시 로그인 해주세요.");
    }
    return axiosInstance.post(ENDPOINTS.REVIEWS(restaurantId), newReview, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
  };

export default sendReviewPostRequest;
