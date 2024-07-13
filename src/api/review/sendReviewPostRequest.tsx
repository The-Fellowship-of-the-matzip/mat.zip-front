import { ReviewInputShape } from "types/common";

import { ACCESS_TOKEN, ENDPOINTS } from "constants/api";
import { MESSAGES } from "constants/messages";

import axiosInstance from "api/axiosInstance";

const sendReviewPostRequest =
  (restaurantId: string) => (newReview: ReviewInputShape) => {
    const accessToken = window.sessionStorage.getItem(ACCESS_TOKEN);
    if (!accessToken) {
      throw new Error(MESSAGES.LOGIN_REQUIRED);
    }
    return axiosInstance.post(ENDPOINTS.REVIEWS(restaurantId), newReview, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
  };

export default sendReviewPostRequest;
