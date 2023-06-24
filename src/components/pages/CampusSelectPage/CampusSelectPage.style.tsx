import styled, { css } from "styled-components";

export const MainContainer = styled.main`
  width: 48rem;
  height: 100vh;
  margin: 0 auto;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: ${({ theme }) => theme.spacer.spacing7};

  background-color: ${({ theme }) => theme.color.white};
`;

export const LogoWrapper = styled.header`
  position: absolute;
  top: ${({ theme }) => theme.spacer.spacing6};
`;

export const ButtonWrapper = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacer.spacing5};
`;

export const buttonStyle = css`
  width: 12rem;
  height: 12rem;

  font-size: 28px;
  line-height: 36px;
  font-weight: bold;

  border: none;
  border-radius: ${({ theme }) => theme.borderRadius.medium};

  box-shadow: 1px 2px 4px rgba(0, 0, 0, 0.15);
`;
