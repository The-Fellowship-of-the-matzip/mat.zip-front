import styled, { css } from "styled-components";

export const Container = styled.form`
  width: 100%;
  display: flex;
`;

export const InputContainer = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  align-items: center;

  & > svg {
    position: absolute;
    left: 16px;
  }
`;

export const inputStyle = css`
  width: 100%;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
`;

export const buttonStyle = css`
  width: 4.85rem;
  height: 4.85rem;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;

  &:focus {
    box-shadow: none;
    outline: 0;
  }
`;
