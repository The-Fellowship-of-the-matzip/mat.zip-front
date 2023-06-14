import { CampusId } from "types/commonTypes";

export const API_BASE_URL = "https://api.matzip.today/api";

export const ENDPOINTS = {
  LOGIN: "/login",
  RANDOM_STORES: (campusId: CampusId, size: number) =>
    `/campuses/${campusId}/restaurants/random?size=${size}`,
  REVIEWS: (restaurantId: string) => `/restaurants/${restaurantId}/reviews`,
  STORE_DETAIL: (restaurantId: string) => `/restaurants/${restaurantId}`,
  STORE_LIST: (campusId: CampusId, type?: string) =>
    `/campuses/${campusId}/restaurants${type !== undefined ? type : ""}`,
  UPDATE_REVIEW_ITEM: (restaurantId: string, articleId: string) =>
    `/restaurants/${restaurantId}/reviews/${articleId}`,
  DELETE_REVIEW_ITEM: (restaurantId: string, articleId: string) =>
    `/restaurants/${restaurantId}/reviews/${articleId}`,
  STORE_REQUESTS: (campusId: CampusId) =>
    `/campuses/${campusId}/restaurantDemands`,
};

export const NETWORK = {
  RETRY_COUNT: 3,
};

export const SIZE = {
  REVIEW: 5,
  LIST_ITEM: 10,
  RANDOM_ITEM: 5,
};

export const FILTERS = [
  { order: "rating", text: "별점 순" },
  { order: "spell", text: "가나다 순" },
];

export const ACCESS_TOKEN = "matzipaccessToken";

export const AUTH_LINK = `https://github.com/login/oauth/authorize?client_id=${
  process.env.NODE_ENV === "production"
    ? "a51717e6e0bb9e34da8e"
    : "e060e7a6b636763ab22d"
}`;
