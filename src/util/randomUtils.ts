import { EMPTY_REVIEW_MESSAGES } from "constants/reviews";

export const getRandomNumber = (max: number) =>
  Math.floor(Math.random() * (max - 1));

export const createArray = <T>(arr: T[], n: number) => {
  const repeat = Array<T[]>(n).fill(arr).flat();
  return repeat;
};

export const getRandomEmptyReviewMessage = () => {
  return EMPTY_REVIEW_MESSAGES[
    getRandomNumber(EMPTY_REVIEW_MESSAGES.length + 1)
  ];
};
