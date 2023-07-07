import { AxiosResponse } from "axios";

import { ACCESS_TOKEN, ACCESS_TOKEN_KEY, ENDPOINTS } from "constants/api";

import axiosInstance from "api/axiosInstance";

interface ImageUploadResponse {
  imageUrl: string;
}

const sendImageUploadPostRequest = async (imageFile: FormData) => {
  if (!ACCESS_TOKEN) {
    window.sessionStorage.removeItem(ACCESS_TOKEN_KEY);
    window.alert("다시 로그인 해주세요");
    window.location.reload();
    throw new Error("엑세스토큰이 유효하지 않습니다");
  }

  const response: AxiosResponse<ImageUploadResponse> = await axiosInstance.post(
    ENDPOINTS.IMAGE_UPLOAD,
    imageFile,
    {
      headers: {
        Authorization: `Bearer ${ACCESS_TOKEN}`,
      },
    }
  );

  return response.data;
};

export default sendImageUploadPostRequest;
