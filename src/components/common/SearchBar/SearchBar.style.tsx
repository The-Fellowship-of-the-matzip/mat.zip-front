import styled from "styled-components";

export const Container = styled.form`
  display: flex;
`;

export const SearchInput = styled.input`
  padding: 0.5rem 1rem;

  background-color: ${({ theme }) => theme.white};

  border: 0.065rem solid ${({ theme }) => theme.secondary};
  border-radius: 0.315rem;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
`;

export const Button = styled.button`
  padding: 0 0.5rem;

  background-color: ${({ theme }) => theme.white};

  border: 0.065rem solid ${({ theme }) => theme.secondary};
  border-radius: 0.315rem;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
`;
