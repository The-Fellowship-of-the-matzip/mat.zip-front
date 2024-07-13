import { useState, useContext, useRef } from "react";
import { useQuery } from "react-query";
import { Campus } from "types/common";

import { NETWORK } from "constants/api";
import { getCampusId } from "constants/campus";

import { campusContext } from "context/CampusContextProvider";

import fetchAutoCompleteStoreList from "api/store/fetchAutoCompleteStoreList";

const useAutoComplete = (keyword: string) => {
  const [debouncedKeyword, setDebouncedKeyword] = useState(keyword);
  const [keepPreviousData, setKeepPreviousData] = useState(false);

  const campusName = useContext(campusContext);
  const campusId = getCampusId(campusName as Campus);

  const debounceRef = useRef<null | ReturnType<typeof setTimeout>>(null);

  const handleImmediateKeyword = (keyword: string) => {
    if (debouncedKeyword !== keyword) {
      if (keepPreviousData) setKeepPreviousData(false);
      setDebouncedKeyword(keyword);
    }
  };

  const handleDebouncedKeyword = (keyword: string) => {
    if (debounceRef.current) clearTimeout(debounceRef.current);
    debounceRef.current = setTimeout(() => {
      if (!keepPreviousData) setKeepPreviousData(true);
      setDebouncedKeyword(keyword);
    }, 300);
  };

  const { data } = useQuery(
    ["autoComplete", campusId, debouncedKeyword],
    () => fetchAutoCompleteStoreList(campusId, debouncedKeyword),
    {
      retry: NETWORK.RETRY_COUNT,
      refetchOnWindowFocus: false,
      keepPreviousData,
    }
  );

  return {
    autoCompleteList: data ?? [],
    handleImmediateKeyword,
    handleDebouncedKeyword,
  };
};

export default useAutoComplete;
