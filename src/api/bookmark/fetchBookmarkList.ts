import { BookmarkStore, BookmarkStoreServerResponse } from "types/common";

import { ACCESS_TOKEN, ENDPOINTS } from "constants/api";

import axiosInstance from "api/axiosInstance";

const fetchBookmarkList = async (): Promise<BookmarkStore[] | undefined> => {
  const accessToken = window.sessionStorage.getItem(ACCESS_TOKEN);

  if (!accessToken) {
    window.sessionStorage.removeItem(ACCESS_TOKEN);
    window.alert("다시 로그인 해주세요");
    window.location.href = "/";
    return;
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
