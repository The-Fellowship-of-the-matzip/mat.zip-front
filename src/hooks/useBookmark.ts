import { MouseEvent, useState } from "react";
import { useMutation } from "react-query";

import sendBookmarkDeleteRequest from "api/bookmark/sendBookmarkDeleteRequest";
import sendBookmarkPostRequest from "api/bookmark/sendBookmarkPostRequest";

export const useBookmark = (restaurantId: number, saved: boolean) => {
  const [bookmark, setBookmark] = useState(saved);

  const deleteBookmark = useMutation(sendBookmarkDeleteRequest(restaurantId), {
    onError: () => {
      alert("오류가 발생했습니다. 잠시 후 다시 시도해주세요.");
      window.location.reload();
    },
  });

  const postBookmark = useMutation(sendBookmarkPostRequest(restaurantId), {
    onError: () => {
      alert("오류가 발생했습니다. 잠시 후 다시 시도해주세요.");
      window.location.reload();
    },
  });

  const handleBookmark = async (event: MouseEvent<HTMLDivElement>) => {
    event.stopPropagation();

    bookmark ? deleteBookmark.mutate() : postBookmark.mutate();

    setBookmark((prevBookmark) => !prevBookmark);
  };

  return { bookmark, handleBookmark };
};
