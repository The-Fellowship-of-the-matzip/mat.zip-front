import styled from "styled-components";

export const Header = styled.header`
  margin-bottom: ${({ theme }) => theme.spacer.spacing4};

  display: flex;
  gap: 6px;
  align-items: center;
`;

export const LeadingButton = styled.button`
  border: none;
  background-color: transparent;

  & > svg {
    width: 16px;
    height: 16px;
  }
`;
