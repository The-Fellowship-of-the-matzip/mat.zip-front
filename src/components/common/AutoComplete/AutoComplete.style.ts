import styled, { css } from "styled-components";

export const Container = styled.div`
  position: absolute;
  width: 100%;

  background-color: ${({ theme }) => theme.color.white};

  border: 1px solid ${({ theme }) => theme.color.primaryLight2};
  border-top: 0px;
  border-radius: ${({ theme }) => theme.borderRadius.small};
  border-top-left-radius: 0;
  border-top-right-radius: 0;
`;

export const buttonStyle = css`
  width: 100%;
  height: 5rem;

  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 1.4rem;
  background-color: ${({ theme }) => theme.color.white};
  border: 0;

  font-weight: 500;

  &:hover:enabled {
    background-color: ${({ theme }) => theme.color.primaryLight4};
  }

  &:focus {
    background-color: ${({ theme }) => theme.color.primaryLight4};
    box-shadow: none;
    outline: 0;
  }
`;
