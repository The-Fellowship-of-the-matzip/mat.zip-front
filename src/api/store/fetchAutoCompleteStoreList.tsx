import { CampusId, AutoCompleteOption } from "types/common";

import { ACCESS_TOKEN, ENDPOINTS } from "constants/api";

import axiosInstance from "api/axiosInstance";

interface AutoCompleteStoreGetResponse {
  restaurants: AutoCompleteOption[];
}

const fetchAutoCompleteStoreList = async (
  campusId: CampusId,
  keyword: string
) => {
  const accessToken = sessionStorage.getItem(ACCESS_TOKEN);

  const userFetchOptions = {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  };

  const { data } = await axiosInstance.get<AutoCompleteStoreGetResponse>(
    ENDPOINTS.AUTO_COMPLETE_STORES(campusId, keyword),
    accessToken ? userFetchOptions : undefined
  );

  return data.restaurants;
};

export default fetchAutoCompleteStoreList;
