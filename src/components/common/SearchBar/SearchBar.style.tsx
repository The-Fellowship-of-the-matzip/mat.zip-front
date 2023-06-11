import styled, { css } from "styled-components";

export const Container = styled.form`
  width: 100%;
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
  padding-left: ${({ theme }) => theme.spacer.spacing6}; ;
`;
