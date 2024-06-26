import { AxiosResponse } from "axios";

import { ACCESS_TOKEN, ENDPOINTS } from "constants/api";

import axiosInstance from "api/axiosInstance";
import { MESSAGES } from "constants/messages";

interface ImageUploadResponse {
  imageUrl: string;
}

const sendImageUploadPostRequest = async (imageFile: FormData) => {
  const accessToken = window.sessionStorage.getItem(ACCESS_TOKEN);

  if (!accessToken) {
    window.sessionStorage.removeItem(ACCESS_TOKEN);
    window.location.reload();

    throw new Error(MESSAGES.LOGIN_REQUIRED);
  }

  const response: AxiosResponse<ImageUploadResponse> = await axiosInstance.post(
    ENDPOINTS.IMAGE_UPLOAD,
    imageFile,
    {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    },
  );

  return response.data;
};

export default sendImageUploadPostRequest;
