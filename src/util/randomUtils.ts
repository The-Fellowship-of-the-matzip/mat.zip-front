export const getRandomNumber = (max: number) =>
  Math.floor(Math.random() * (max - 1));

export const createArray = <T>(arr: T[], n: number) => {
  const repeat = Array<T[]>(n).fill(arr).flat();
  return repeat;
};
