import styled, { css } from "styled-components";

export const Container = styled.div`
  margin-bottom: ${({ theme }) => theme.spacer.spacing5};
  display: flex;
  gap: ${({ theme }) => theme.spacer.spacing4};
`;

export const ProfileImage = styled.img`
  width: 7.2rem;
  height: 7.2rem;
  object-fit: cover;
  border-radius: 50%;
`;

export const ContentWrapper = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacer.spacing1};
`;

export const ReviewInfoWrapper = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacer.spacing1};
`;

export const usernameTextStyle = css`
  font-weight: bold;
`;

export const subTextStyle = css`
  color: ${({ theme }) => theme.color.gray600};
  font-weight: bold;
`;

export const subTextNumberStyle = css`
  color: ${({ theme }) => theme.color.gray600};
`;
