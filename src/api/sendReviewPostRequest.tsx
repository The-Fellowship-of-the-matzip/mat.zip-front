import { ENDPOINTS } from "constants/api";

import axiosInstance from "api/axiosInstance";

type ReviewInputShape = {
  content: string;
  rating: number;
  menu: string;
};

const sendReviewPostRequest =
  (restaurantId: string) => (newReview: ReviewInputShape) => {
    const accessToken = window.sessionStorage.getItem("accessToken") as string;
    return axiosInstance.post(ENDPOINTS.REVIEWS(restaurantId), newReview, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
  };

export default sendReviewPostRequest;
