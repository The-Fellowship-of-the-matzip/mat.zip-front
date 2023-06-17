import styled from "styled-components";

export const Form = styled.form`
  width: 100%;

  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacer.spacing3}; ;
`;

export const StarRatingWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;
