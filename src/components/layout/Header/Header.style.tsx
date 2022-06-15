import styled, { css } from "styled-components";

export const Container = styled.header<{ isSearchOpen: boolean }>`
  width: 375px;
  height: 60px;
  margin: 0 auto;

  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 1em 2em;

  background-color: ${({ theme }) => theme.primary};

  ${({ isSearchOpen }) =>
    isSearchOpen &&
    css`
      justify-content: flex-end;
      gap: 0.5em;
    `};
`;

export const PageName = styled.h1`
  font-size: 20px;
`;

export const RightWrapper = styled.div`
  display: flex;
  align-items: flex-end;

  gap: 1em;
`;

export const Profile = styled.div`
  background-color: ${({ theme }) => theme.white};
  border-radius: 50%;
  width: 30px;
  height: 30px;
`;

export const LoginLink = styled.a`
  text-decoration: none;
  padding-bottom: 0.2rem;
  &:hover {
    color: ${({ theme }) => theme.white};
  }
`;

export const SearchToggleButton = styled.button`
  background-color: transparent;
  border: none;

  font-size: 20px;

  cursor: pointer;
`;
