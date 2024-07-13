import { BookmarkStore, BookmarkStoreServerResponse } from "types/common";

import { ACCESS_TOKEN, ENDPOINTS } from "constants/api";
import { MESSAGES } from "constants/messages";

import axiosInstance from "api/axiosInstance";

const fetchBookmarkList = async (): Promise<BookmarkStore[] | undefined> => {
  const accessToken = window.sessionStorage.getItem(ACCESS_TOKEN);

  if (!accessToken) {
    throw new Error(MESSAGES.LOGIN_REQUIRED);
  }

  const { data } = await axiosInstance.get<BookmarkStoreServerResponse[]>(
    ENDPOINTS.BOOKMARKS,
    {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    }
  );

  const formattedData: BookmarkStore[] = data.map((bookmarkStore) => {
    return {
      ...bookmarkStore,
      thumbnailUrl: bookmarkStore.imageUrl,
    };
  });

  return formattedData;
};

export default fetchBookmarkList;
