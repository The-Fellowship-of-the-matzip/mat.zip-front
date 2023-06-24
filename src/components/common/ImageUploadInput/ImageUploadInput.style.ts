import styled, { css } from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacer.spacing2};
`;

export const InputWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  gap: ${({ theme }) => theme.spacer.spacing2};
`;

export const Input = styled.input`
  display: none;
`;

export const UploadedImage = styled.img`
  width: 10rem;
  height: 10rem;
  object-fit: cover;
  border-radius: ${({ theme }) => theme.borderRadius.small};
`;

export const buttonStyle = css`
  height: 10rem;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.spacer.spacing2};

  font-weight: normal;

  transition-property: background-color, border, outline !important;

  &.uploaded {
    width: 10rem;
  }
`;
