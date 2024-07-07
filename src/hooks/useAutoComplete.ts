import { useState, useContext, useRef } from "react";
import { Campus, AutoCompleteOption } from "types/common";

import { getCampusId } from "constants/campus";

import { campusContext } from "context/CampusContextProvider";

import fetchAutoCompleteStoreList from "api/store/fetchAutoCompleteStoreList";

const useAutoComplete = () => {
  const campusName = useContext(campusContext);
  const campusId = getCampusId(campusName as Campus);

  const [autoCompleteList, setAutoCompleteList] = useState<
    AutoCompleteOption[]
  >([]);
  const debounceRef = useRef<null | ReturnType<typeof setTimeout>>(null);

  const handleAutoCompleteList = async (keyword: string) => {
    if (debounceRef.current) clearTimeout(debounceRef.current);

    debounceRef.current = setTimeout(async () => {
      const list = await fetchAutoCompleteStoreList(campusId, keyword);
      setAutoCompleteList(list);
    }, 300);
  };

  return { autoCompleteList, handleAutoCompleteList };
};

export default useAutoComplete;
