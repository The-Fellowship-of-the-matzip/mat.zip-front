import styled from "styled-components";

export const MiniHeader = styled.h2`
  padding: 0.2em;

  font-size: 1.25rem;
`;

export const LeadingButton = styled.button`
  margin-right: 0.5em;

  border: none;
  background-color: transparent;
  font-size: 1rem;
  font-weight: 700;
  color: ${({ theme }) => theme.secondary};
`;
