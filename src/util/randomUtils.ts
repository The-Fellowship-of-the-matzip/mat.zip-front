export const getRandomNumber = (max: number) =>
  window.crypto.getRandomValues(new Uint16Array(1))[0] % max;

export const createArray = <T>(arr: T[], n: number) => {
  const repeat = Array<T[]>(n).fill(arr).flat();
  return repeat;
};
