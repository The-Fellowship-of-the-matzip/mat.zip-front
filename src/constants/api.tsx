import { CampusId } from "types/common/campusTypes";

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
  IMAGE_UPLOAD: "/images",
  USER_PROFILE: "/mypage/profile",
  USER_REVIEWS: "/mypage/reviews",
  BOOKMARKS: "/restaurants/bookmarks",
  BOOKMARK_STORE: (restaurantId: number) =>
    `bookmarks/restaurants/${restaurantId}`,
} as const;

export const NETWORK = {
  RETRY_COUNT: 3,
} as const;

export const SIZE = {
  REVIEW: 5,
  LIST_ITEM: 10,
  RANDOM_ITEM: 5,
  MY_PAGE_ITEM: 3,
} as const;

export const FILTERS = [
  { order: "rating", text: "별점 순" },
  { order: "spell", text: "가나다 순" },
] as const;

export const ACCESS_TOKEN_KEY = "matzipaccessToken";

export const AUTH_LINK = `https://github.com/login/oauth/authorize?client_id=${
  process.env.NODE_ENV === "production"
    ? "a51717e6e0bb9e34da8e"
    : "e060e7a6b636763ab22d"
}`;
