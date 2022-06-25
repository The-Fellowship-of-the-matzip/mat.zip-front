import styled from "styled-components";

export const Container = styled.section``;

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
  position: fixed;
  bottom: 0;
  max-width: 37.5rem;
  width: 100%;
  min-height: 6.25rem;
  padding: 1.5rem;

  display: flex;
  flex-direction: column;
  gap: 2rem;

  border-radius: 0.625rem 0.625rem 0 0;
  background-color: ${({ theme }) => theme.white};
  box-shadow: 0 -0.2rem 0.4rem 0 ${({ theme }) => theme.secondary};
`;

export const Title = styled.h1``;

export const InputWrapper = styled.div``;
