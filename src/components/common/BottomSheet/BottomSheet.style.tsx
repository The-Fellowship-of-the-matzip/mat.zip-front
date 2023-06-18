import styled from "styled-components";

export const Container = styled.section<{ scrollOffset: number }>`
  position: absolute;
  top: ${({ scrollOffset }) => scrollOffset}px;
  left: 0;

  width: 100%;
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;
`;

export const Backdrop = styled.div`
  position: absolute;
  top: 0;
  left: 0;

  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.2);

  cursor: pointer;
`;

export const ContentWrapper = styled.div`
  position: fixed;
  bottom: 0;
  max-width: 48rem;
  width: 100%;

  padding: ${({ theme }) => theme.spacer.spacing3};

  display: flex;
  flex-direction: column;

  background-color: ${({ theme }) => theme.color.white};

  border-radius: 8px 8px 0 0;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
`;

export const Content = styled.div`
  margin-top: ${({ theme }) => theme.spacer.spacing4};
`;
