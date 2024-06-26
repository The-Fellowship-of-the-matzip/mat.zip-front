import type { BookmarkStore } from "types/common/bookmarkTypes";

import { ACCESS_TOKEN, ENDPOINTS } from "constants/api";

import axiosInstance from "api/axiosInstance";
import { MESSAGES } from "constants/messages";

const fetchBookmarkList = async () => {
  const accessToken = window.sessionStorage.getItem(ACCESS_TOKEN);

  if (!accessToken) {
    throw new Error(MESSAGES.LOGIN_REQUIRED);
  }

  const { data } = await axiosInstance.get<BookmarkStore[]>(
    ENDPOINTS.BOOKMARKS,
    {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    },
  );

  return data;
};

export default fetchBookmarkList;
