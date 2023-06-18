import styled from "styled-components";

import Image from "components/common/Image/Image";
import { Text } from "components/common/Text/Text.style";

export const Container = styled.header`
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
  max-width: 48rem;
  width: 100%;
  min-width: 28rem;
  height: fit-content;
  margin: 0 auto;
  padding: ${({ theme }) => theme.spacer.spacing3};

  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: ${({ theme }) => theme.spacer.spacing4};

  background-color: ${({ theme }) => theme.color.white};

  z-index: 99;
`;

export const TopWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const PageName = styled.h1`
  width: fit-content;

  display: flex;
  align-items: flex-end;
  gap: 0.5rem;

  font-size: 1.25rem;
`;

export const LogoImage = styled(Image)`
  width: 12rem;
`;

export const Campus = styled(Text).attrs({ as: "span" })`
  position: relative;
  top: -2px;
  color: ${({ theme }) => theme.color.black};
`;

export const RightWrapper = styled.div`
  display: flex;
  align-items: center;

  gap: 1rem;
`;

export const Profile = styled.div`
  background-color: ${({ theme }) => theme.color.whitre};
  border-radius: 50%;
  width: 1.875rem;
  height: 1.875rem;
`;

export const LoginLink = styled.a`
  text-decoration: none;
  padding-bottom: 0.2rem;
  &:hover {
    color: ${({ theme }) => theme.color.white};
  }
  &:active {
    color: ${({ theme }) => theme.color.white};
  }
`;

export const SearchToggleButton = styled.button`
  background-color: transparent;
  border: none;
  height: 1.5rem;

  font-size: 1.5rem;

  &:focus {
    color: ${({ theme }) => theme.color.black};
  }
`;

export const MenuButton = styled.button`
  background-color: transparent;
  border: none;
  height: 2.4rem;

  font-size: 2.4rem;

  &:focus {
    color: ${({ theme }) => theme.color.black};
  }
`;
