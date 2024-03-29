import { CategoryId } from "./categoryTypes";

export interface Store {
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

export interface StoreDemand {
  id: string;
  categoryId: CategoryId;
  name: string;
  author: string;
  isRegistered: boolean;
  isAuthor: boolean;
}
