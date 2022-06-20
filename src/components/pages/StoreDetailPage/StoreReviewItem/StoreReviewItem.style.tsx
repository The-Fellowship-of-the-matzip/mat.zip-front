import styled from "styled-components";

export const StoreReviewContainer = styled.section`
  display: flex;
  position: relative;
  width: 100%;
  height: fit-content;
  padding: 1rem;
  justify-content: flex-end;
  border: 0.065rem solid ${({ theme }) => theme.secondary};
  border-radius: 0.25rem;
`;

export const UserProfileWrapper = styled.div`
  top: 1.1rem;
  left: 5%;
  width: 3rem;
  height: 3rem;
  position: absolute;
  border-radius: 50%;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: fill;
  }
`;

export const ReviewContentWrapper = styled.div`
  width: 80%;
`;

export const Header = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const HeaderLeftWrapper = styled.div`
  margin-top: -0.4rem;
`;

export const MenuWrapper = styled.div``;

export const ContentWrapper = styled.div`
  margin-top: 1.5rem;
  overflow: hidden;
  word-break: break-all;
`;

export const RatingPlaceholder = styled.div`
  font-size: 1rem;
  color: ${({ theme }) => theme.secondary};
`;
