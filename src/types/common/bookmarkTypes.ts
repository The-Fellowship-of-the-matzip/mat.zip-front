export interface BookmarkStore {
  id: number;
  name: string;
  imageUrl: string;
  rating: number;
  reviewCount: number;
  distance: number;
  saved: boolean;
}
