import styled from "styled-components";

export const Label = styled.label`
  font-size: 1.4rem;
  line-height: 2rem;
  font-weight: 600;
`;

export const Required = styled.span`
  color: ${({ theme }) => theme.color.redDark}; ;
`;
