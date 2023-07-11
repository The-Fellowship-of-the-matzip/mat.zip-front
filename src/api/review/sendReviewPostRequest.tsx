import { ReviewInputShape } from "types/common";

import { ENDPOINTS } from "constants/api";

import { axiosInstance } from "api/axiosInstance";

const sendReviewPostRequest =
  (restaurantId: string) => (newReview: ReviewInputShape) => {
    return axiosInstance.post(ENDPOINTS.REVIEWS(restaurantId), newReview, {
      useAuth: true,
    });
  };

export default sendReviewPostRequest;
