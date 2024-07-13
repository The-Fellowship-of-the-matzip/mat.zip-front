import type { ReviewInputShape } from "./reviewTypes";
import type { Store, StoreServerResponse } from "./storeTypes";

export interface UserProfileInformation {
  username: string;
  profileImage: string;
  reviewCount: number;
  averageRating: number;
}

export interface UserReviewServerResponse extends ReviewInputShape {
  id: number;
  restaurant: Pick<StoreServerResponse, "id" | "name" | "imageUrl">;
  imageUrl: string | null;
  updatable: boolean;
}

export type UserReview = Omit<UserReviewServerResponse, "restaurant"> & {
  restaurant: Pick<Store, "id" | "name" | "thumbnailUrl">;
};
