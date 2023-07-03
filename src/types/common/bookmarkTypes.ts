import { Store } from "./storeTypes";

export interface BookmarkStore extends Omit<Store, "kakaoMapUrl"> {
  saved: boolean;
}
