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