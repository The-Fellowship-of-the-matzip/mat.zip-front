import styled, { css } from "styled-components";

export const Container = styled.section`
  position: relative;
  padding: ${({ theme }) => theme.spacer.spacing3};
`;

export const requestButtonStyle = css`
  position: absolute;
  right: 2rem;
  top: 2rem;
  width: initial;
`;
