import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Star from "./Star";

export interface StoreListItemProps {
  thumbnailUrl: string;
  name: string;
  campus: "잠실" | "선릉";
  distance: number;
  starCount: number;
}

const ListItemContainer = styled.li`
  display: flex;
  align-items: center;
  gap: 2em;

  width: 100%;
  padding: 2em;

  border-top: 1px solid ${({ theme }) => theme.black};
  background-color: ${({ theme }) => theme.white};
  cursor: pointer;

  &:hover {
    opacity: 0.9;
  }
  &:active {
    opacity: 1;
  }
`;

const ListItemThumbnail = styled.img`
  width: 4em;
  height: 4em;

  border-radius: 50%;
  object-fit: cover;
  object-position: center;
`;

const ListItemName = styled.span`
  font-size: 1.25rem;
  font-weight: 700;
`;

const ListItemDistance = styled.p`
  color: ${({ theme }) => theme.secondary};
`;

const ListItemStars = styled.div`
  font-size: 1.5rem;
`;

function StoreListItem({
  thumbnailUrl,
  name,
  campus,
  distance,
  starCount,
}: StoreListItemProps) {
  const navigate = useNavigate();

  return (
    <ListItemContainer
      onClick={() => {
        navigate("/store-detail");
      }}
    >
      <ListItemThumbnail src={thumbnailUrl} alt={name} />
      <div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "1em",
          }}
        >
          <ListItemName>{name}</ListItemName>
          <ListItemDistance>
            {campus} 캠퍼스 기준 {distance}km
          </ListItemDistance>
        </div>
        <ListItemStars>
          {Array.from({ length: starCount }).map(() => (
            <Star isFilled />
          ))}
        </ListItemStars>
      </div>
    </ListItemContainer>
  );
}

export default StoreListItem;
