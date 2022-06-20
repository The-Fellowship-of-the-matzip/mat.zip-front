import styled, { css } from "styled-components";

export const Container = styled.header<{ isSearchOpen: boolean }>`
  width: 23.45rem;
  height: fit-content;
  margin: 0 auto;

  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 1rem;

  background-color: ${({ theme }) => theme.primary};

  ${({ isSearchOpen }) =>
    isSearchOpen &&
    css`
      justify-content: flex-end;
      gap: 0.5rem;
    `};
`;

export const PageName = styled.h1`
  width: fit-content;

  display: flex;
  align-items: flex-end;
  gap: 0.5rem;

  font-size: 1.25rem;
`;

export const LogoImage = styled.img`
  width: 7.5rem;
`;

export const Campus = styled.span`
  font-size: 0.8rem;
  color: ${({ theme }) => theme.black};
`;

export const RightWrapper = styled.div`
  display: flex;
  align-items: center;

  gap: 1rem;
`;

export const Profile = styled.div`
  background-color: ${({ theme }) => theme.white};
  border-radius: 50%;
  width: 1.875rem;
  height: 1.875rem;
`;

export const LoginLink = styled.a`
  text-decoration: none;
  padding-bottom: 0.2rem;
  &:hover {
    color: ${({ theme }) => theme.white};
  }
  &:active {
    color: ${({ theme }) => theme.white};
  }
`;

export const SearchToggleButton = styled.button`
  background-color: transparent;
  border: none;
  height: 1.5rem;

  font-size: 1.5rem;

  cursor: pointer;
`;

export const MenuButton = styled.button`
  background-color: transparent;
  border: none;
  height: 1.5rem;

  /* color: ${({ theme }) => theme.white}; */
  font-size: 1.5rem;
`;
