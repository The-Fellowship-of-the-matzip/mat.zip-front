import { MouseEvent, useRef, useState } from "react";
import { useMutation } from "react-query";

import sendBookmarkDeleteRequest from "api/bookmark/sendBookmarkDeleteRequest";
import sendBookmarkPostRequest from "api/bookmark/sendBookmarkPostRequest";

export const useMarked = (restaurantId: number, liked: boolean) => {
  const [marked, setMarked] = useState(liked);
  const debounceRef = useRef<null | ReturnType<typeof setTimeout>>(null);

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

    if (debounceRef.current) clearTimeout(debounceRef.current);
    debounceRef.current = setTimeout(() => {
      marked ? deleteBookmark.mutate() : postBookmark.mutate();
    }, 300);

    setMarked((prevMarked) => !prevMarked);
  };

  return { marked, handleMarked };
};
