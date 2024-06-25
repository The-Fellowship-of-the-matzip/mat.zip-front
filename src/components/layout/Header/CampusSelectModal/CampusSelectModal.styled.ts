import styled, { css } from "styled-components";

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ButtonContainerStyling = css`
  display: flex;
  gap: ${({ theme }) => theme.spacer.spacing1};
`;

export const ModalContentStyling = css`
  padding: 3rem 0;
`;
