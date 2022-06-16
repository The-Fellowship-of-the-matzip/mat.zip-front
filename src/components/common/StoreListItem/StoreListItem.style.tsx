import styled from "styled-components";

export const ListItemContainer = styled.li`
  display: flex;
  align-items: center;
  gap: 2rem;

  width: 100%;
  padding: 2rem;

  border-top: 0.065rem solid ${({ theme }) => theme.black};
  background-color: ${({ theme }) => theme.white};
  cursor: pointer;

  &:hover {
    opacity: 0.9;
  }
  &:active {
    opacity: 1;
  }
`;

export const ListItemThumbnail = styled.img`
  width: 4rem;
  height: 4rem;

  border-radius: 50%;
  object-fit: cover;
  object-position: center;
`;

export const ListItemName = styled.span`
  font-size: 1.25rem;
  font-weight: 700;
`;

export const ListItemDistance = styled.p`
  color: ${({ theme }) => theme.secondary};
`;

export const ListItemStars = styled.div`
  font-size: 1.5rem;
`;
