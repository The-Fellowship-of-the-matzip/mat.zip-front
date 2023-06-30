import { MouseEvent, useEffect, useState } from "react";
import { useMutation } from "react-query";

import sendBookmarkDeleteRequest from "api/bookmark/sendBookmarkDeleteRequest";
import sendBookmarkPostRequest from "api/bookmark/sendBookmarkPostRequest";

export const useBookmark = (restaurantId: number, liked: boolean) => {
  const [marked, setMarked] = useState(liked);
  const [tmpMark, setTmpMark] = useState(liked);

  useEffect(() => {
    const debounce = setTimeout(() => {
      return setMarked(tmpMark);
    }, 200);
    return () => clearTimeout(debounce);
  }, [tmpMark]);

  useEffect(() => {
    const fetchBookmark = async () => {
      marked ? deleteBookmark.mutate() : postBookmark.mutate();
    };
    if (tmpMark !== liked) fetchBookmark();
  }, [marked]);

  const deleteBookmark = useMutation(sendBookmarkDeleteRequest(restaurantId), {
    onMutate: () => ({ prevMarked: marked }),
    onError: (err, _, context) => {
      alert("오류가 발생했습니다. 잠시 후 다시 시도해주세요.");
      setMarked(context?.prevMarked!);
    },
  });

  const postBookmark = useMutation(sendBookmarkPostRequest(restaurantId), {
    onMutate: () => ({ prevMarked: marked }),
    onError: (err, _, context) => {
      alert("오류가 발생했습니다. 잠시 후 다시 시도해주세요.");
      setMarked(context?.prevMarked!);
    },
  });

  const handleMarked = (event: MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    setTmpMark((prevTmpMark) => !prevTmpMark);
  };

  return { marked, handleMarked };
};
