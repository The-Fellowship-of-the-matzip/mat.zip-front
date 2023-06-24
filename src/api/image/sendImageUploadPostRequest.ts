import { AxiosResponse } from "axios";

import { ACCESS_TOKEN, ENDPOINTS } from "constants/api";

import axiosInstance from "api/axiosInstance";

const sendImageUploadPostRequest = async (imageFile: File) => {
  const accessToken = window.sessionStorage.getItem(ACCESS_TOKEN);
  if (!accessToken) {
    window.sessionStorage.removeItem(ACCESS_TOKEN);
    window.alert("다시 로그인 해주세요");
    window.location.reload();
    return;
  }
  const response: AxiosResponse<string> = await axiosInstance.post(
    ENDPOINTS.IMAGE_UPLOAD,
    imageFile,
    {
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "multipart/form-data",
      },
    }
  );
  return response.data;
};

export default sendImageUploadPostRequest;
