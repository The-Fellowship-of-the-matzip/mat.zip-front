import { CampusId } from "types/common";

export const QUERY_KEY = {
  randomStore: "randomStore",
  randomStoreRoulette: "randomStoreRoulette",
  bookmarkStore: "bookmarkStore",
  storeDetailInfo: "storeDetailInfo",
  userProfile: "userProfile",
  myReview: "myReview",
  reviewDetailStore: (restaurantId: string | undefined) => [
    "reviewDetailStore",
    { restaurantId },
  ],
  categoryStore: (params: {
    size: number;
    campusId: CampusId;
    filter?: string | null;
    categoryId?: string
    type ?: string
  }) => ["categoryStore", { ...params }],
  storeDemand: ({ campusId, size }: { campusId: number; size: number }) => [
    "storeDemand",
    { campusId, size },
  ],
  myReviewList: ["myReviewList"],
};
