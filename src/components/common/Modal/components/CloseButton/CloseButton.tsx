import { CloseIcon } from "asset";
import * as S from "./CloseButton.styled";
import { CSSProp } from "styled-components";

interface CloseButtonProps {
  onCloseModal: () => void;
  css?: CSSProp;
}

export default function CloseButton({ onCloseModal, css }: CloseButtonProps) {
  return (
    <S.CloseButton css={css} onClick={onCloseModal} aria-label="닫기">
      <CloseIcon />
    </S.CloseButton>
  );
}
