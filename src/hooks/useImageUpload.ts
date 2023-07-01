import { useState } from "react";

import sendImageUploadPostRequest from "api/image/sendImageUploadPostRequest";

export const useImageUpload = (url: null | string = null) => {
  const [uploadedImageUrl, setUploadedImageUrl] = useState(url);

  const handleImageUpload = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    if (!event.target.files) return;

    try {
      const image = event.target.files[0];
      const { imageUrl } = await sendImageUploadPostRequest(image);
      setUploadedImageUrl(imageUrl);
    } catch (error) {
      alert("이미지 업로드에 실패했습니다. 다시 시도해 주세요.");
    }

    event.target.value = "";
  };

  const handleImageRemoval = () => {
    setUploadedImageUrl(null);
  };

  return { uploadedImageUrl, handleImageUpload, handleImageRemoval };
};
