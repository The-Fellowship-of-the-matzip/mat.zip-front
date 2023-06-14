interface getNextPageParamProp {
  hasNext: boolean;
  nextPageParam?: number;
}

const getNextPageParam = (lastPage: getNextPageParamProp) => {
  if (lastPage.hasNext) {
    return lastPage.nextPageParam;
  }
  return;
};

export default getNextPageParam;
