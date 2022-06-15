import styled from "styled-components";

export const Container = styled.section``;

export const Backdrop = styled.div`
  width: 100vw;
  height: 100vh;

  background-color: ${({ theme }) => theme.black};
  opacity: 0.5;

  position: fixed;
  top: 0;
  left: 0;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2em;

  position: fixed;
  bottom: 0;
  left: 0;

  width: 100%;
  min-height: 100px;
  padding: 1.5em;

  border-radius: 10px 10px 0px 0px;

  background-color: ${({ theme }) => theme.white};
  box-shadow: 0px -2px 13px 1px rgba(0, 0, 0, 0.25);
`;

export const Title = styled.h1``;

export const InputWrapper = styled.div``;
