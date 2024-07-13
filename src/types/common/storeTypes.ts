import { CategoryId } from "./categoryTypes";

export interface StoreServerResponse {
  id: number;
  name: string;
  address: string;
  distance: number;
  kakaoMapUrl: string;
  imageUrl: string;
  rating: number;
  reviewCount: number;
  liked: boolean;
}

export type Store = Omit<StoreServerResponse, "imageUrl"> & {
  thumbnailUrl: string;
};

export type StoreItemWithHeart = Pick<
  Store,
  | "id"
  | "name"
  | "distance"
  | "rating"
  | "reviewCount"
  | "liked"
  | "thumbnailUrl"
>;

export type StoreItemWithoutHeart = Omit<StoreItemWithHeart, "liked">;

export interface StoreDemand {
  id: string;
  categoryId: CategoryId;
  name: string;
  author: string;
  isRegistered: boolean;
  isAuthor: boolean;
}
