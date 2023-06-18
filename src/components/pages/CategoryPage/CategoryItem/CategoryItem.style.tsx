import styled, { css } from "styled-components";

export const CategoryItemContainer = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: ${({ theme }) => theme.spacer.spacing3};

  width: 7.2rem;
  outline: 0 solid ${({ theme }) => theme.color.white};
  border-radius: ${({ theme }) => theme.borderRadius.small};

  cursor: pointer;

  &:focus {
    outline: 1px solid ${({ theme }) => theme.color.white};
    box-shadow: 0 0 0 3px ${({ theme }) => theme.color.gray100};
  }
`;

export const Icon = styled.div`
  height: 4.8rem;
`;

export const textStyle = css`
  color: ${({ theme }) => theme.color.black};
  font-weight: bold;
  text-align: center;
`;
