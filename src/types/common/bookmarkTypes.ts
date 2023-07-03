import { Store } from "./storeTypes";

export interface BookmarkStore extends Omit<Store, "kakaoMapUrl"> {
  liked: boolean;
}
