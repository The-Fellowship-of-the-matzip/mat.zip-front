import { MouseEvent, useState } from "react";
import { useMutation } from "react-query";

import sendBookmarkDeleteRequest from "api/bookmark/sendBookmarkDeleteRequest";
import sendBookmarkPostRequest from "api/bookmark/sendBookmarkPostRequest";

export const useMarked = (liked: boolean) => {
  const [marked, setMarked] = useState(liked);

  const deleteBookmark = useMutation(sendBookmarkDeleteRequest, {
    onMutate: () => ({ prevMarked: marked }),
    onError: (err, _, context) => {
      alert("오류가 발생했습니다. 잠시 후 다시 시도해주세요.");
      setMarked(context?.prevMarked!);
    },
  });

  const postBookmark = useMutation(sendBookmarkPostRequest, {
    onMutate: () => ({ prevMarked: marked }),
    onError: (err, _, context) => {
      alert("오류가 발생했습니다. 잠시 후 다시 시도해주세요.");
      setMarked(context?.prevMarked!);
    },
  });

  const handleMarked = (
    event: MouseEvent<HTMLButtonElement>,
    restaurantId: number
  ) => {
    event.stopPropagation();

    marked
      ? deleteBookmark.mutate(restaurantId)
      : postBookmark.mutate(restaurantId);
    setMarked((prevMarked) => !prevMarked);
  };

  return { marked, handleMarked };
};
