import styled from "styled-components";

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
  // width 값 , figma로 따라감
  width: 330px;
  height: fit-content;
  padding: 1rem;
  // justify-content: space-around;
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
  // img 없어서 임시로 배경색으로 대체
  background-color: #187dd6cb;
  border-radius: 50%;
`;

const ReviewContentWrapper = styled.div`
  width: 80%;
`;

const FILLED_STAR_ICON = "\u2605";

const Header = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const HeaderLeftWrapper = styled.div`
  margin-top: 0.4rem;
`;

const StarWrapper = styled.span`
  color: #e6d706;
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
            <StarWrapper>{FILLED_STAR_ICON}</StarWrapper>
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
