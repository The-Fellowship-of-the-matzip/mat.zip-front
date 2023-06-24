import { useState } from "react";

import sendImageUploadPostRequest from "api/image/sendImageUploadPostRequest";

export const useImageUpload = (url: null | string = null) => {
  const [uploadedImageUrl, setUploadedImageUrl] = useState(url);

  const changeUploadedImage = async (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    if (!e.target.files) return;

    try {
      const image = e.target.files[0];
      const data = await sendImageUploadPostRequest(image);
      const imageUrl = data?.imageUrl;
      setUploadedImageUrl(imageUrl);
    } catch (error) {
      alert("이미지 업로드에 실패했습니다.");
    }
  };

  return { uploadedImageUrl, changeUploadedImage };
};
