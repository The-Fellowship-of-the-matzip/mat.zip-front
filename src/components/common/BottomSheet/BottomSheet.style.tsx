import styled from "styled-components";

export const Container = styled.section``;

export const Backdrop = styled.div`
  width: 23.45rem;
  height: 100vh;

  background-color: ${({ theme }) => theme.black};
  opacity: 0.5;

  position: absolute;
  top: 0;
  left: 0;
`;

export const Content = styled.div`
  width: 23.45rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;

  position: fixed;
  bottom: 0;
  left: calc(50% - (23.45rem / 2));

  min-height: 6.25rem;
  padding: 1.5rem;

  border-radius: 0.625rem 0.625rem 0 0;

  background-color: ${({ theme }) => theme.white};
  box-shadow: 0 -0.125rem 0.815rem 0.065rem rgba(0, 0, 0, 0.25);
`;

export const Title = styled.h1``;

export const InputWrapper = styled.div``;
