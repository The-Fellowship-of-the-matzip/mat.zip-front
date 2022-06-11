import styled from "styled-components";

interface StoreListItemProps {
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
  color: #e6d706;
`;

const FILLED_STAR_ICON = "\u2605";

function StoreListItem({
  thumbnailUrl,
  name,
  campus,
  distance,
  starCount,
}: StoreListItemProps) {
  return (
    <ListItemContainer>
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
        <ListItemStars>{FILLED_STAR_ICON.repeat(starCount)}</ListItemStars>
      </div>
    </ListItemContainer>
  );
}

export default StoreListItem;
