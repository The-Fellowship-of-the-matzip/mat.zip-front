import styled from "styled-components";
import Star from "./Star";

interface StoreReviewItemProps {
  reviewInfo: {
    userThumbnail: string;
    rating: number;
    desc: string;
    menuName: string;
  };
}

const StoreReviewContainer = styled.section`
  display: flex;
  position: relative;
  width: 100%;
  height: fit-content;
  padding: 1rem;
  justify-content: flex-end;
  border: 1px solid ${({ theme }) => theme.secondary};
  border-radius: 4px;
`;

const UserProfileWrapper = styled.div`
  top: 1.1rem;
  left: 5%;
  width: 3rem;
  height: 3rem;
  position: absolute;
  background-color: #187dd6cb;
  border-radius: 50%;
`;

const ReviewContentWrapper = styled.div`
  width: 80%;
`;

const Header = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const HeaderLeftWrapper = styled.div`
  margin-top: 0.4rem;
`;

const MenuWrapper = styled.div`
  border: 1px solid ${({ theme }) => theme.secondary};
  border-radius: 22px;
  padding: 0.3rem;
`;

const ContentWrapper = styled.div`
  margin-top: 1.5rem;
  overflow: hidden;
  word-break: break-all;
`;

function StoreReviewItem({ reviewInfo }: StoreReviewItemProps) {
  const { userThumbnail, rating, desc, menuName } = reviewInfo;
  return (
    <StoreReviewContainer>
      <UserProfileWrapper>
        {/* <img src={userThumbnail} alt="유저의 프로필이 보여지는 곳" /> */}
      </UserProfileWrapper>
      <ReviewContentWrapper>
        <Header>
          <HeaderLeftWrapper>
            <Star isFilled />
            <span>X {rating}</span>
          </HeaderLeftWrapper>
          <MenuWrapper>{menuName}</MenuWrapper>
        </Header>
        <ContentWrapper>{desc}</ContentWrapper>
      </ReviewContentWrapper>
    </StoreReviewContainer>
  );
}

export default StoreReviewItem;
