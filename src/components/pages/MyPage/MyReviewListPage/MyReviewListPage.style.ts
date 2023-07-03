import styled, { css } from "styled-components";

export const Container = styled.div`
  position: relative;
  padding: ${({ theme }) => theme.spacer.spacing3};
`;

export const HeaderWrapper = styled.header`
  display: flex;
  justify-content: space-between;
  background-color: white;
`;

export const ReviewItemWrapper = styled.div`
  margin-bottom: ${({ theme }) => theme.spacer.spacing3};
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacer.spacing3};
`;

export const headerStyle = css`
  font-weight: bold;
  padding-bottom: ${({ theme }) => theme.spacer.spacing3};
  margin-bottom: ${({ theme }) => theme.spacer.spacing4};
`;
