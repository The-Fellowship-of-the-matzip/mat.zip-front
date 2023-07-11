import type { UserProfileInformation } from "types/common";

import { ENDPOINTS } from "constants/api";

import { axiosInstance } from "api/axiosInstance";

const fetchUserProfile = async () => {
  const { data } = await axiosInstance.get<UserProfileInformation>(
    ENDPOINTS.USER_PROFILE,
    {
      useAuth: true,
    }
  );

  return data;
};

export default fetchUserProfile;
