interface getNextPageParamProps {
  hasNext: boolean;
  nextPageParam?: number;
}

const getNextPageParam = (lastPage: getNextPageParamProps) => {
  if (lastPage.hasNext) {
    return lastPage.nextPageParam;
  }
  return;
};

export default getNextPageParam;
