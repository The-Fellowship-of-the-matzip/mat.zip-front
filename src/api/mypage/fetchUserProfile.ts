import type { UserProfileInformation } from 'types/common';

import { ACCESS_TOKEN, ENDPOINTS } from 'constants/api';

import axiosInstance from 'api/axiosInstance';
import { MESSAGES } from 'constants/messages';

const fetchUserProfile = async () => {
  const accessToken = window.sessionStorage.getItem(ACCESS_TOKEN);

  if (!accessToken) {
    window.sessionStorage.removeItem(ACCESS_TOKEN);
    throw new Error(MESSAGES.LOGIN_RETRY);
  }

  const { data } = await axiosInstance.get<UserProfileInformation>(ENDPOINTS.USER_PROFILE, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });

  return data;
};

export default fetchUserProfile;
