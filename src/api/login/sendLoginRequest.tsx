import { ENDPOINTS } from "constants/api";
import { MESSAGES } from "constants/messages";

import { axiosInstance } from "api/axiosInstance";

const sendLoginRequest = async (code: string) => {
  const { status, data } = await axiosInstance.get(ENDPOINTS.LOGIN, {
    params: { code },
  });

  if (status !== 200) {
    throw new Error(MESSAGES.LOGIN_FAIL);
  }

  return data.accessToken;
};

export default sendLoginRequest;
