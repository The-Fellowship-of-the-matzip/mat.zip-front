import styled from "styled-components";

export const TitleContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
`;

export const TitleRatingWrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
`;

export const DescriptionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  padding: 1rem 0;

  width: 100%;
  word-break: break-all;
  color: ${({ theme }) => theme.secondary};
`;

export const RatingWrapper = styled.span`
  font-weight: 700;
  font-size: 1.5rem;
  margin-left: 0.4rem;
`;

export const KakaoLink = styled.a`
  text-decoration: underline;
`;
