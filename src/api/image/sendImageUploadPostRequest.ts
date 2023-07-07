import { AxiosResponse } from "axios";

import { ENDPOINTS } from "constants/api";

import { authAxiosInstance } from "api/axiosInstance";

interface ImageUploadResponse {
  imageUrl: string;
}

const sendImageUploadPostRequest = async (imageFile: FormData) => {
  const response: AxiosResponse<ImageUploadResponse> =
    await authAxiosInstance.post(ENDPOINTS.IMAGE_UPLOAD, imageFile);

  return response.data;
};

export default sendImageUploadPostRequest;
