import { AxiosResponse } from "axios";

import { ENDPOINTS } from "constants/api";

import { axiosInstance } from "api/axiosInstance";

interface ImageUploadResponse {
  imageUrl: string;
}

const sendImageUploadPostRequest = async (imageFile: FormData) => {
  const response: AxiosResponse<ImageUploadResponse> = await axiosInstance.post(
    ENDPOINTS.IMAGE_UPLOAD,
    imageFile,
    {
      useAuth: true,
    }
  );

  return response.data;
};

export default sendImageUploadPostRequest;
