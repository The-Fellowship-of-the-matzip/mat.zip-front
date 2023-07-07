import { ReviewInputShape } from "types/common";

import { ACCESS_TOKEN, ACCESS_TOKEN_KEY, ENDPOINTS } from "constants/api";

import axiosInstance from "api/axiosInstance";

const sendReviewPostRequest =
  (restaurantId: string) => (newReview: ReviewInputShape) => {
    if (!ACCESS_TOKEN) {
      window.sessionStorage.removeItem(ACCESS_TOKEN_KEY);
      window.alert("다시 로그인 해주세요");
      window.location.reload();
      throw new Error("엑세스토큰이 유효하지 않습니다");
    }

    return axiosInstance.post(ENDPOINTS.REVIEWS(restaurantId), newReview, {
      headers: {
        Authorization: `Bearer ${ACCESS_TOKEN}`,
      },
    });
  };

export default sendReviewPostRequest;
