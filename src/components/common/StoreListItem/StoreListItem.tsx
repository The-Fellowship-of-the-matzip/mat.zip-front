import { campusContext } from "context/CampusContextProvider";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import repeatComponent from "util/repeatComponent";

import Star from "components/common/Star/Star";
import * as S from "components/common/StoreListItem/StoreListItem.style";

interface StoreListItemProps {
  id: number;
  thumbnailUrl: string;
  name: string;
  distance: number;
  rating: number;
}

function StoreListItem({
  id,
  thumbnailUrl,
  name,
  distance,
  rating,
}: StoreListItemProps) {
  const navigate = useNavigate();
  const campusName = useContext(campusContext);
  console.log(rating);
  return (
    <S.ListItemContainer
      onClick={() => {
        navigate(`/store-detail/${id}`);
      }}
    >
      <S.ListItemThumbnail src={thumbnailUrl} alt={name} />
      <div>
        <S.ListItemName>{name}</S.ListItemName>
        <S.ListItemDistance>
          {campusName} 캠퍼스 기준 도보 {distance}분
        </S.ListItemDistance>
        <S.ListItemStars>
          {repeatComponent(<Star isFilled />, rating)}
          <S.RatingPlaceholder>
            {rating === 0 && "별점 준비 중"}
          </S.RatingPlaceholder>
        </S.ListItemStars>
      </div>
    </S.ListItemContainer>
  );
}

export default StoreListItem;
