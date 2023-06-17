import styled, { css } from "styled-components";

export const CategoryItemContainer = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 12px;

  width: fit-content;

  cursor: pointer;
`;

export const buttonStyle = css`
  width: 4.8rem;
  height: 4.8rem;

  text-align: center;
  border-radius: ${({ theme }) => theme.borderRadius.small};
`;

export const textStyle = css`
  font-weight: 600;
  text-align: center;
`;
