import { StoreServerResponse } from "./storeTypes";

export type BookmarkStoreServerResponse = Omit<
  StoreServerResponse,
  "kakaoMapUrl" | "liked"
>;

export type BookmarkStore = Omit<BookmarkStoreServerResponse, "imageUrl"> & {
  thumbnailUrl: string;
};
