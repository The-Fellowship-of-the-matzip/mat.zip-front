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
