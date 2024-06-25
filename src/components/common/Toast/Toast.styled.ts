import styled from "styled-components";
import { keyframes } from "styled-components";

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

const fadeOut = keyframes`
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
`;

export const ToastContainer = styled.div<{ $isOpen: boolean }>`
  background-color: ${({ theme }) => theme.color.red};
  color: ${({ theme }) => theme.color.white};
  width: 48rem;
  height: 5rem;
  position: fixed;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: ${({ theme }) => theme.zIndex.toast};
  animation: ${({ $isOpen }) => ($isOpen ? fadeIn : fadeOut)} 0.7s ease-out;
`;
