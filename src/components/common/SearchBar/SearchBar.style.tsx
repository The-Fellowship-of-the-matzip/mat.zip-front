import styled from "styled-components";

export const Container = styled.form`
  display: flex;

  width: 100%;
`;

export const SearchInput = styled.input`
  width: 100%;
  padding: 0.5rem 1rem;

  background-color: ${({ theme }) => theme.white};
  border: none;
  border-radius: 0.3rem 0 0 0.3rem;
  box-shadow: 0 0 0.1rem ${({ theme }) => theme.secondary} inset;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
`;

export const Button = styled.button`
  padding: 0 0.5rem;

  background-color: ${({ theme }) => theme.white};
  border: none;
  border-left: 1px solid ${({ theme }) => theme.secondary};
  border-radius: 0 0.3rem 0.3rem 0;
  box-shadow: 0 0 0.1rem ${({ theme }) => theme.secondary} inset;
`;
