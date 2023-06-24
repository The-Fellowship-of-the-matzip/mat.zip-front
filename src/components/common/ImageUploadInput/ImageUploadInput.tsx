import { Button } from "../Button/Button.style";
import { Label } from "../Label/Label.style";
import * as S from "./ImageUploadInput.style";
import { useRef } from "react";

import { ImageIcon } from "asset";

interface ImageUploadInputProps {
  label?: string;
  imageUrl: string | null;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
function ImageUploadInput({
  label,
  imageUrl,
  onChange,
}: ImageUploadInputProps) {
  const inputRef = useRef<HTMLInputElement | null>(null);

  const uploadButtonClick = () => {
    if (!inputRef.current) return;
    inputRef.current.click();
  };

  return (
    <S.Container>
      {label && <Label id="image-upload">{label}</Label>}
      <S.InputWrapper>
        <Button
          css={S.buttonStyle}
          type="button"
          className={imageUrl ? "uploaded" : ""}
          onClick={uploadButtonClick}
        >
          <ImageIcon />
          {!imageUrl && " 이미지를 업로드해 주세요"}
        </Button>
        <S.Input
          type="file"
          accept="image/*"
          id="image-upload"
          name="image-upload"
          ref={inputRef}
          onChange={onChange}
        />
        {imageUrl && <S.UploadedImage src={imageUrl} alt="리뷰 이미지" />}
      </S.InputWrapper>
    </S.Container>
  );
}
export default ImageUploadInput;
