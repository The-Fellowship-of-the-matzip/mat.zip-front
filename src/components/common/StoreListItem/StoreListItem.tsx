import { useNavigate } from "react-router-dom";
import repeatComponent from "util/repeatComponent";

import Star from "components/common/Star/Star";
import * as S from "components/common/StoreListItem/StoreListItem.style";

interface StoreListItemProps {
  thumbnailUrl: string;
  name: string;
  distance: number;
  rating: number;
}

function StoreListItem({
  thumbnailUrl,
  name,
  distance,
  rating,
}: StoreListItemProps) {
  const navigate = useNavigate();
  const campus: "잠실" | "선릉" = "잠실"; // TODO: 전역 상태로 저장

  return (
    <S.ListItemContainer
      onClick={() => {
        navigate("/store-detail");
      }}
    >
      <S.ListItemThumbnail src={thumbnailUrl} alt={name} />
      <div>
        <S.ListItemName>{name}</S.ListItemName>
        <S.ListItemDistance>
          {campus} 캠퍼스 기준 {distance}km
        </S.ListItemDistance>
        <S.ListItemStars>
          {repeatComponent(<Star isFilled />, rating)}
        </S.ListItemStars>
      </div>
    </S.ListItemContainer>
  );
}

export default StoreListItem;
