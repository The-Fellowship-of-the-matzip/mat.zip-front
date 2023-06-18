import { Link } from "react-router-dom";

import styled, { css } from "styled-components";

export const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;

  width: 100%;
  height: 100vh;
  margin: 0 auto;

  z-index: ${({ theme }) => theme.zIndex.overlay};
`;

export const Backdrop = styled.div`
  position: absolute;
  top: 0;
  left: 0;

  width: 100%;
  height: 100%;

  background-color: rgba(0, 0, 0, 0.2);
`;

export const Content = styled.aside`
  width: 24rem;
  height: 100vh;

  padding: ${({ theme }) => theme.spacer.spacing4};

  background-color: ${({ theme }) => theme.color.white};

  position: absolute;
  top: 0;
  right: 0;

  box-shadow: -2px 0px 6px rgba(0, 0, 0, 0.15);

  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacer.spacing2};

  transform-origin: right;
  animation: slidein 0.2s ease;

  @keyframes slidein {
    0% {
      transform: scale(0, 1);
    }
    100% {
      transform: scale(1, 1);
    }
  }
`;

export const LoginLink = styled.a`
  padding: 14px;
  font-size: 16px;
  font-weight: 600;
  text-align: center;

  color: ${({ theme }) => theme.color.black};

  border-radius: ${({ theme }) => theme.borderRadius.small};
  outline: 0 solid ${({ theme }) => theme.color.white};
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: ${({ theme }) => theme.color.gray100};
  }

  &:focus {
    outline: 1px solid ${({ theme }) => theme.color.white};
    box-shadow: 0 0 0 3px ${({ theme }) => theme.color.gray100};
  }
`;

export const CustomLink = styled(Link)`
  padding: 14px;
  font-size: 16px;
  font-weight: 600;
  text-align: center;

  color: ${({ theme }) => theme.color.black};

  border-radius: ${({ theme }) => theme.borderRadius.small};
  outline: 0 solid ${({ theme }) => theme.color.white};
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: ${({ theme }) => theme.color.gray100};
  }

  &:focus {
    outline: 1px solid ${({ theme }) => theme.color.white};
    box-shadow: 0 0 0 3px ${({ theme }) => theme.color.gray100};
  }
`;

export const titleStyle = css`
  margin-bottom: ${({ theme }) => theme.spacer.spacing3};
  font-weight: bold;
  text-align: center;
`;
