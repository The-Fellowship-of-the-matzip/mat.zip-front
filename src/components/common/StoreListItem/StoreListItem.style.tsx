import styled from "styled-components";

import Image from "components/common/Image/Image";

export const ListItemContainer = styled.li`
  display: flex;
  align-items: center;
  gap: 2rem;

  width: 100%;
  padding: 1.5rem 2rem;

  border-top: 0.065rem solid ${({ theme }) => theme.secondary};
  background-color: ${({ theme }) => theme.white};
  cursor: pointer;

  &:hover {
    opacity: 0.9;
  }
  &:active {
    opacity: 1;
  }
`;

export const ListItemThumbnail = styled(Image)`
  width: 4rem;
  height: 4rem;

  border-radius: 50%;
  object-fit: cover;
  object-position: center;
  box-shadow: 0 0 0.2rem ${({ theme }) => theme.primary};
`;

export const ListItemTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
`;

export const ListItemName = styled.span`
  font-size: 1.25rem;
  font-weight: 700;
`;

export const ListItemDistance = styled.p`
  color: ${({ theme }) => theme.secondary};
`;

export const ListItemStars = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 1.5rem;
`;

export const RatingText = styled.span`
  font-size: 1.2rem;
  font-weight: 500;
`;

export const EmptyRatingText = styled.span`
  margin-top: 0.4rem;
  font-size: 1rem;
  font-weight: 400;
  color: black;
`;
