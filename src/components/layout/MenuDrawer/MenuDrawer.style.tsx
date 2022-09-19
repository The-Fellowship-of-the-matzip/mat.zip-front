import { Link } from "react-router-dom";

import styled from "styled-components";

export const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;

  width: 100%;
  height: 100vh;
  margin: 0 auto;
`;

export const Backdrop = styled.div`
  width: 100%;
  height: 100%;

  background-color: ${({ theme }) => theme.black};
  opacity: 0.5;

  position: absolute;
  top: 0;
  left: 0;
`;

export const Content = styled.aside`
  width: 15rem;
  height: 100vh;

  padding: 2rem 1rem;

  background-color: ${({ theme }) => theme.white};

  position: absolute;
  top: 0;
  right: 0;

  box-shadow: -0.315rem 0 0.25rem rgba(0, 0, 0, 0.25);

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;

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

export const Title = styled.h1`
  font-size: 1.25rem;
  text-align: center;
`;

export const Button = styled.button`
  background-color: transparent;
  border: none;

  font-size: 1rem;
  font-weight: 600;

  &:hover {
    color: ${({ theme }) => theme.secondary};
  }
`;

export const LoginLink = styled.a`
  font-size: 1rem;
  font-weight: 600;

  color: ${({ theme }) => theme.black};

  &:visited {
    color: ${({ theme }) => theme.black};
  }

  &:hover {
    color: ${({ theme }) => theme.secondary};
  }
`;

export const CustomLink = styled(Link)`
  font-size: 1rem;
  font-weight: 600;
  color: ${({ theme }) => theme.black};

  &:visited {
    color: ${({ theme }) => theme.black};
  }

  &:hover {
    color: ${({ theme }) => theme.secondary};
  }
`;
