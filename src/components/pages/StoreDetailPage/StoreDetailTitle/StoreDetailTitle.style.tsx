import styled, { css } from "styled-components";

export const TitleContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
`;

export const RatingContainer = styled.div`
  width: 100%;
  margin-top: ${({ theme }) => theme.spacer.spacing2};

  display: flex;
  flex-direction: row;
  align-items: center;
  gap: ${({ theme }) => theme.spacer.spacing2};
`;

export const DescriptionWrapper = styled.div`
  margin-top: ${({ theme }) => theme.spacer.spacing2};
  width: 100%;

  display: flex;
  flex-direction: column;
  gap: 2px;

  color: ${({ theme }) => theme.color.gray600};
  word-break: break-all;
`;

export const RatingWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacer.spacing1};
`;

export const KakaoLink = styled.a`
  display: inline-block;
  color: ${({ theme }) => theme.color.gray600};
  font-size: 1.4rem;
  line-height: 2rem;
  text-decoration: underline;

  transition: all 0.2s ease-in;

  &:hover {
    color: ${({ theme }) => theme.color.gray800};
  }
`;

export const ratingTextStyle = css`
  font-weight: 600;
  margin-left: ${({ theme }) => theme.spacer.spacing2};
`;

export const subTextStyle = css`
  color: ${({ theme }) => theme.color.gray600};
`;

export const reviewCountStyle = css`
  font-weight: 600;
  color: ${({ theme }) => theme.color.gray600};
`;
