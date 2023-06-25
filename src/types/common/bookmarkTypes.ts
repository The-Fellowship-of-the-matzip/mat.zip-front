export interface BookmarkStore {
  id: number;
  name: string;
  imageUrl: string;
  address: string;
  rating: number;
  reviewCount: number;
  distance: number;
  saved: boolean;
}
