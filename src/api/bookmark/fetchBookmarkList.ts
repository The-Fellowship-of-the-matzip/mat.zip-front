import type { BookmarkStore } from "types/common/bookmarkTypes";

import { ACCESS_TOKEN, ACCESS_TOKEN_KEY, ENDPOINTS } from "constants/api";

import axiosInstance from "api/axiosInstance";

const fetchBookmarkList = async () => {
  if (!ACCESS_TOKEN) {
    window.sessionStorage.removeItem(ACCESS_TOKEN_KEY);
    window.alert("다시 로그인 해주세요");
    window.location.href = "/";
    return;
  }

  const { data } = await axiosInstance.get<BookmarkStore[]>(
    ENDPOINTS.BOOKMARKS,
    {
      headers: {
        Authorization: `Bearer ${ACCESS_TOKEN}`,
      },
    }
  );

  return data;
};

export default fetchBookmarkList;
