import type { BookmarkStore } from "types/common/bookmarkTypes";

import { ENDPOINTS } from "constants/api";

import { axiosInstance } from "api/axiosInstance";

const fetchBookmarkList = async () => {
  const { data } = await axiosInstance.get<BookmarkStore[]>(
    ENDPOINTS.BOOKMARKS,
    {
      useAuth: true,
    }
  );

  return data;
};

export default fetchBookmarkList;
