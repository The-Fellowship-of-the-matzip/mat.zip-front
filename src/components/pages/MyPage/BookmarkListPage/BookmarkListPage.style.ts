import styled, { css } from "styled-components";

export const Container = styled.div`
  position: relative;
  padding: ${({ theme }) => theme.spacer.spacing3};
`;

export const HeaderWrapper = styled.header`
  display: flex;
  justify-content: space-between;
  background-color: white;
  padding-bottom: ${({ theme }) => theme.spacer.spacing3};
  margin-bottom: ${({ theme }) => theme.spacer.spacing4};
`;

export const headerStyle = css`
  font-weight: bold;
`;

export const headerButtonStyle = css`
  width: initial;
  padding: 0;

  &:hover:enabled {
    background-color: transparent;
  }
`;
