import Star from "components/common/Star";

import styled from "styled-components";

interface StoreDetailTitleProps {
  storeInfo: {
    name: string;
    rating: number;
    desc: string;
  };
}

const TitleContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
`;

const TitleRatingWrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
`;

const DescriptionWrapper = styled.div`
  width: 100%;
  overflow: hidden;
  word-break: break-all;
  margin-top: 30px;
`;

function StoreDetailTitle({ storeInfo }: StoreDetailTitleProps) {
  const { name, rating, desc } = storeInfo;
  return (
    <TitleContainer>
      <TitleRatingWrapper>
        <h2>{name}</h2>
        <div>
          <Star isFilled />
          <span>{rating}</span>
        </div>
      </TitleRatingWrapper>
      <DescriptionWrapper>{desc}</DescriptionWrapper>
    </TitleContainer>
  );
}

export default StoreDetailTitle;
