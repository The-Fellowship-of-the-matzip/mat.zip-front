import styled from "styled-components";

export const Container = styled.section`
  padding: 1rem;

  position: relative;
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

export const CreateRequestButton = styled(CustomButton)`
  position: absolute;
  right: 2rem;
  top: 2rem;
`;
