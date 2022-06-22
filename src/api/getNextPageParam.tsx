type PageParams = { hasNext: boolean; nextPageParam?: number };

const getNextPageParam = <T extends PageParams>(lastPage: T) => {
  if (lastPage.hasNext) {
    return lastPage.nextPageParam;
  }
  return;
};

export default getNextPageParam;
