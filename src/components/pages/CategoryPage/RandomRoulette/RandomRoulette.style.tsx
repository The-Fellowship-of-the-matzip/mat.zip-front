import styled, { css } from "styled-components";

export const Container = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({ theme }) => theme.spacer.spacing5};

  & button {
    padding: 12px;
  }
`;

export const RecommendBlock = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 6px;
`;

export const Outer = styled.div`
  width: calc(100% - 24rem);
  height: 3rem;
  overflow: hidden;
`;

export const Inner = styled.div<{ runAnimation: boolean }>`
  display: flex;
  flex-direction: column;

  ${({ runAnimation }) =>
    runAnimation &&
    css`
      animation: slider ease-in-out 3.5s;
      transform: translateY(calc(-100% + 3.2rem));
    `}

  @keyframes slider {
    0% {
      transform: translateY(0);
    }
    10% {
      transform: translateY(1.5rem);
    }
    85% {
      transform: translateY(calc(-100% + 0.5rem));
    }
    100% {
      transform: translateY(calc(-100% + 3.2rem));
    }
  }
`;

export const RouletteSlot = styled.div`
  height: 3.2rem;
  font-size: 2rem;
  line-height: 2.8rem;
  font-weight: bold;
  text-align: center;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

export const ResultWrapper = styled.div`
  width: 100%;
  transform-origin: top;
  animation: slide-from-top 0.2s ease;

  @keyframes slide-from-top {
    0% {
      transform: scaleY(0);
    }
    100% {
      transform: scaleY(1);
    }
  }
`;

export const ButtonContainer = styled.div`
  width: 100%;

  display: flex;
  justify-content: center;
  gap: ${({ theme }) => theme.spacer.spacing2};
`;
