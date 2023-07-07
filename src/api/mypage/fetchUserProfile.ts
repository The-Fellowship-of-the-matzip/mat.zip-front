import type { UserProfileInformation } from "types/common";

import { ACCESS_TOKEN, ACCESS_TOKEN_KEY, ENDPOINTS } from "constants/api";

import axiosInstance from "api/axiosInstance";

const fetchUserProfile = async () => {
  if (!ACCESS_TOKEN) {
    window.sessionStorage.removeItem(ACCESS_TOKEN_KEY);
    window.alert("다시 로그인 해주세요");
    window.location.href = "/";
    return;
  }

  const { data } = await axiosInstance.get<UserProfileInformation>(
    ENDPOINTS.USER_PROFILE,
    {
      headers: {
        Authorization: `Bearer ${ACCESS_TOKEN}`,
      },
    }
  );

  return data;
};

export default fetchUserProfile;
