import { MouseEvent, useEffect, useState } from "react";
import { useMutation } from "react-query";

import sendBookmarkDeleteRequest from "api/bookmark/sendBookmarkDeleteRequest";
import sendBookmarkPostRequest from "api/bookmark/sendBookmarkPostRequest";

export const useBookmark = (restaurantId: number, liked: boolean) => {
  const [bookmark, setBookmark] = useState(liked);
  const [tmpMark, setTmpMark] = useState(liked);

  useEffect(() => {
    const debounce = setTimeout(() => {
      return setBookmark(tmpMark);
    }, 200);
    return () => clearTimeout(debounce);
  }, [tmpMark]);

  useEffect(() => {
    const fetchBookmark = async () => {
      bookmark ? deleteBookmark.mutate() : postBookmark.mutate();
    };
    if (tmpMark !== liked) fetchBookmark();
  }, [bookmark]);

  const deleteBookmark = useMutation(sendBookmarkDeleteRequest(restaurantId), {
    onMutate: () => ({ prevBookmark: bookmark }),
    onError: (err, _, context) => {
      alert("오류가 발생했습니다. 잠시 후 다시 시도해주세요.");
      setBookmark(context?.prevBookmark!);
    },
  });

  const postBookmark = useMutation(sendBookmarkPostRequest(restaurantId), {
    onMutate: () => ({ prevBookmark: bookmark }),
    onError: (err, _, context) => {
      alert("오류가 발생했습니다. 잠시 후 다시 시도해주세요.");
      setBookmark(context?.prevBookmark!);
    },
  });

  const handleBookmark = (event: MouseEvent<HTMLDivElement>) => {
    event.stopPropagation();
    setTmpMark((prevMark) => !prevMark);
  };

  return { bookmark, handleBookmark };
};
