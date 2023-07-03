import type { ReviewInputShape } from "./reviewTypes";
import type { Store } from "./storeTypes";

export interface UserProfileInformation {
  username: string;
  profileImage: string;
  reviewCount: number;
  averageRating: number;
}

export interface UserReview extends ReviewInputShape {
  id: number;
  restaurant: Pick<Store, "id" | "name" | "imageUrl">;
  imageUrl: string | null;
  updatable: boolean;
}
