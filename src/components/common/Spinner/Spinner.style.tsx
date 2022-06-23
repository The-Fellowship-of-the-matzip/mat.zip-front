import styled from "styled-components";

export const SpinnerContainer = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  div {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 4rem;
    height: 4rem;
    margin-top: -2rem;
    margin-left: -2rem;
    border-radius: 50%;
    border: 0.5rem solid transparent;
    border-top-color: ${({ theme }) => theme.primary};
    border-bottom-color: ${({ theme }) => theme.primary};
    animation: spin 1s ease infinite;
  }
`;
