import { Button } from "../Button/Button.style";
import { Label } from "../Label/Label.style";
import * as S from "./ImageUploadInput.style";
import { useRef } from "react";

import { CloseIcon, ImageIcon } from "asset";

interface ImageUploadInputProps {
  label?: string;
  imageUrl: string | null;
  imageAltText: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onRemove: () => void;
}
function ImageUploadInput({
  label,
  imageUrl,
  imageAltText,
  onChange,
  onRemove,
}: ImageUploadInputProps) {
  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleUploadButton = () => {
    if (!inputRef.current) return;

    inputRef.current.click();
  };

  return (
    <S.Container>
      {label && <Label id="image-upload">{label}</Label>}
      <S.InputWrapper>
        <Button
          css={S.uploadButtonStyle}
          type="button"
          className={imageUrl ? "uploaded" : ""}
          onClick={handleUploadButton}
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
        {imageUrl && (
          <S.UploadedImageWrapper>
            <S.UploadedImage src={imageUrl} alt={imageAltText} />
            <S.DeleteButton
              type="button"
              aria-label="이미지 삭제"
              onClick={onRemove}
            >
              <CloseIcon />
            </S.DeleteButton>
          </S.UploadedImageWrapper>
        )}
      </S.InputWrapper>
    </S.Container>
  );
}
export default ImageUploadInput;
