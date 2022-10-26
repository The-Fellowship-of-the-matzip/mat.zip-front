import styled, { css } from "styled-components";

export const Container = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`;

export const RecommendBlock = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
`;

export const Label = styled.p`
  text-align: center;
`;

export const Outer = styled.div`
  height: 4rem;
  width: 14rem;
  overflow: hidden;
  padding: 1rem 0.5rem;
`;

export const Inner = styled.div<{ runAnimation: boolean }>`
  font-size: 1.2rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  ${({ runAnimation }) =>
    runAnimation &&
    css`
      animation: slider ease-in-out 5s;
      transform: translateY(calc(-100% + 2rem));
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
      transform: translateY(calc(-100% + 2rem));
    }
  }
`;

export const RouletteSlot = styled.div`
  text-align: center;
  height: 2rem;
  line-height: 2rem;
  width: 13rem;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

export const ResultWrapper = styled.div`
  width: 100%;
  border-bottom: 0.065rem solid ${({ theme }) => theme.secondary};
  transform-origin: top;
  animation: slidein 0.2s ease;

  @keyframes slidein {
    0% {
      transform: scaleY(0);
    }
    100% {
      transform: scaleY(1);
    }
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 0.5rem;
`;

export const CustomButton = styled.button`
  background-color: ${({ theme }) => theme.primary};
  color: ${({ theme }) => theme.white};
  border: none;
  border-radius: 0.25rem;
  padding: 0.5rem 0.8rem;
  box-shadow: 1px 1px 1px #8d8d8d;
  font-weight: 600;
`;
