import styled from "styled-components";

export const MainContainer = styled.main`
  width: 23.45rem;
  height: 100vh;
  margin: 0 auto;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 3.125rem;

  background-color: ${({ theme }) => theme.white};
`;

export const Title = styled.h1``;

export const ButtonWrapper = styled.div`
  display: flex;
  gap: 1.25rem;
`;

export const Button = styled.button`
  width: 8rem;
  height: 8rem;

  color: ${({ theme }) => theme.white};
  font-size: 32px;
  font-weight: 700;

  border: none;
  border-radius: 1.25rem;

  background-color: ${({ theme }) => theme.primary};
  box-shadow: 0.065rem 0.065rem 0.065rem ${({ theme }) => theme.secondary};
`;
