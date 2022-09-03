import styled from "styled-components";

export const Container = styled.section`
  position: absolute;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
`;

export const Backdrop = styled.div`
  width: 100%;
  height: 100vh;

  background-color: ${({ theme }) => theme.black};
  opacity: 0.5;

  position: absolute;
  top: 0;
  left: 0;
`;

export const Content = styled.div`
  background-color: ${({ theme }) => theme.white};
  width: 90%;
  min-height: 5rem;
  z-index: 2;
  position: relative;
  border-radius: 0.8rem;
  box-shadow: 0px -2px 13px 1px rgba(0, 0, 0, 0.25);
  padding: 1rem;
  display: flex;
  flex-direction: column;
`;

export const CloseButton = styled.button`
  top: 1rem;
  right: 1rem;
  background-color: transparent;
  border: none;
  border-bottom: 1px solid ${({ theme }) => theme.secondary};
  align-self: flex-end;
`;
