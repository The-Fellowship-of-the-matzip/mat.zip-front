export const API_BASE_URL = "https://matzip.link/api";

type CampusId = 1 | 2;

export const ENDPOINTS = {
  LOGIN: "/login",
  RANDOM_STORES: (campusId: CampusId, size: number) =>
    `/campuses/${campusId}/restaurants/random?size=${size}`,
  REVIEWS: (restaurantId: string) => `/restaurants/${restaurantId}/reviews`,
  STORE_DETAIL: (restaurantId: string) => `/restaurants/${restaurantId}`,
  STORE_LIST: (campusId: CampusId, type?: string) =>
    `/campuses/${campusId}/restaurants${type !== undefined ? type : ""}`,
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

export const AUTH_LINK = `https://github.com/login/oauth/authorize?client_id=${
  process.env.NODE_ENV === "production"
    ? "a51717e6e0bb9e34da8e"
    : "e060e7a6b636763ab22d"
}`;
