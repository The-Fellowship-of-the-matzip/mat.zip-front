import type { BookmarkStore } from "types/common/bookmarkTypes";

import { ENDPOINTS } from "constants/api";

import { authAxiosInstance } from "api/axiosInstance";

const fetchBookmarkList = async () => {
  const { data } = await authAxiosInstance.get<BookmarkStore[]>(
    ENDPOINTS.BOOKMARKS
  );

  return data;
};

export default fetchBookmarkList;
