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

const StarWrapper = styled.span`
  justify-content: center;
  text-align: center;
  font-size: 1.5rem;
  //TODO:  별 색깔 const로 빼기
  color: #e6d706;
`;

const FILLED_STAR_ICON = "\u2605";

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
          <StarWrapper>{FILLED_STAR_ICON}</StarWrapper>
          <span>{rating}</span>
        </div>
      </TitleRatingWrapper>
      <DescriptionWrapper>{desc}</DescriptionWrapper>
    </TitleContainer>
  );
}

export default StoreDetailTitle;
