import { Button } from "../Button/Button.style";
import { Label } from "../Label/Label.style";
import * as S from "./ImageUploadInput.style";
import { ComponentPropsWithoutRef, useRef } from "react";

import { CloseIcon, ImageIcon } from "asset";

interface ImageUploadInputProps extends ComponentPropsWithoutRef<"input"> {
  label?: string;
  imageUrl: string | null;
  imageAltText: string;
  onRemove: () => void;
}
function ImageUploadInput({
  id,
  label,
  imageUrl,
  imageAltText,
  onRemove,
  ...attributes
}: ImageUploadInputProps) {
  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleUploadButton = () => {
    if (!inputRef.current) return;

    inputRef.current.click();
  };

  return (
    <S.Container>
      {label && <Label id={id}>{label}</Label>}
      <S.InputWrapper>
        <Button
          css={S.getUploadButtonStyle(!!imageUrl)}
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
          id={id}
          ref={inputRef}
          {...attributes}
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
