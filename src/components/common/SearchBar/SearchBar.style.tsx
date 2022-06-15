import styled from "styled-components";

export const Container = styled.div`
  display: flex;
`;

export const SearchInput = styled.input`
  padding: 0.5em 1em;

  background-color: ${({ theme }) => theme.white};

  border: 1px solid ${({ theme }) => theme.secondary};
  border-radius: 5px;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
`;

export const Button = styled.button`
  padding: 0 0.5em;

  background-color: ${({ theme }) => theme.white};

  border: 1px solid ${({ theme }) => theme.secondary};
  border-radius: 5px;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
`;
