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
  width: 100%;
  overflow: hidden;
  word-break: break-all;
  margin-top: 1.875rem;
`;

export const RatingWrapper = styled.span`
  font-weight: 700;
  font-size: 1.5rem;
  margin-left: 0.4rem;
`;
