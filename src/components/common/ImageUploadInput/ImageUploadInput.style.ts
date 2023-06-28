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

export const UploadedImageWrapper = styled.div`
  position: relative;
  height: 10rem;
`;

export const UploadedImage = styled.img`
  width: 10rem;
  height: 10rem;
  object-fit: cover;
  border-radius: ${({ theme }) => theme.borderRadius.small};
`;

export const DeleteButton = styled.button`
  position: absolute;
  right: 0;
  width: 3.6rem;
  height: 3.6rem;
  background-color: ${({ theme }) => theme.color.black};

  border: none;
  border-radius: 0;
  border-top-right-radius: ${({ theme }) => theme.borderRadius.small};
  outline: 0;

  transition: all 0.2s ease-in;

  &:hover {
    background-color: ${({ theme }) => theme.color.gray800};
  }

  & svg {
    width: 12px;
    height: 12px;

    & > path {
      stroke: ${({ theme }) => theme.color.white};
    }
  }
`;

export const uploadButtonStyle = css`
  height: 10rem;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.spacer.spacing2};

  font-weight: normal;

  &.uploaded {
    display: none;
  }
`;
