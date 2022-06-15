import styled from "styled-components";

export const StoreReviewContainer = styled.section`
  display: flex;
  position: relative;
  width: 100%;
  height: fit-content;
  padding: 1rem;
  justify-content: flex-end;
  border: 1px solid ${({ theme }) => theme.secondary};
  border-radius: 4px;
`;

export const UserProfileWrapper = styled.div`
  top: 1.1rem;
  left: 5%;
  width: 3rem;
  height: 3rem;
  position: absolute;
  background-color: #187dd6cb;
  border-radius: 50%;
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
  margin-top: 0.4rem;
`;

export const MenuWrapper = styled.div`
  border: 1px solid ${({ theme }) => theme.secondary};
  border-radius: 22px;
  padding: 0.3rem;
`;

export const ContentWrapper = styled.div`
  margin-top: 1.5rem;
  overflow: hidden;
  word-break: break-all;
`;
