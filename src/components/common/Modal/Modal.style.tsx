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

export const Content = styled.div`
  position: relative;
  width: 100%;
  margin: ${({ theme }) => theme.spacer.spacing3};
  padding: ${({ theme }) => theme.spacer.spacing3};

  display: flex;
  flex-direction: column;

  background-color: ${({ theme }) => theme.color.white};

  border-radius: ${({ theme }) => theme.borderRadius.medium};
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.15);
  z-index: 2;
`;

export const CloseButton = styled.button`
  position: absolute;
  top: ${({ theme }) => theme.spacer.spacing3};
  right: ${({ theme }) => theme.spacer.spacing3};

  background-color: transparent;
  border: none;
`;
