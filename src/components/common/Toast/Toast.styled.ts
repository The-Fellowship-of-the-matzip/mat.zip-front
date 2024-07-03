import styled from "styled-components";
import { keyframes, css } from "styled-components";

import { ToastStatus } from "components/common/Toast/Toast.type";

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

const getBackgroundColor = ($type: ToastStatus) => {
  switch ($type) {
    case "active":
      return css`
        background-color: ${({ theme }) => theme.color.green};
      `;
    case "danger":
      return css`
        background-color: ${({ theme }) => theme.color.red};
      `;
  }
};

export const ToastContainer = styled.div<{
  $isOpen: boolean;
  $type: ToastStatus;
}>`
  ${({ $type }) => getBackgroundColor($type)};
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
