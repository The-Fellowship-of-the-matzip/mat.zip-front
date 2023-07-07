import type { UserProfileInformation } from "types/common";

import { ENDPOINTS } from "constants/api";

import { authAxiosInstance } from "api/axiosInstance";

const fetchUserProfile = async () => {
  const { data } = await authAxiosInstance.get<UserProfileInformation>(
    ENDPOINTS.USER_PROFILE
  );

  return data;
};

export default fetchUserProfile;
