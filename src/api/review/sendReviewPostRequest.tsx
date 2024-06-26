import { ReviewInputShape } from "types/common";

import { ACCESS_TOKEN, ENDPOINTS } from "constants/api";

import axiosInstance from "api/axiosInstance";
import { MESSAGES } from "constants/messages";

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
