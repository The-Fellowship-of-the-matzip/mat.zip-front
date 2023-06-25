import styled, { css } from "styled-components";

import Image from "components/common/Image/Image";

export const ListItemContainer = styled.li`
  width: 100%;
  background-color: ${({ theme }) => theme.color.white};

  display: flex;
  gap: ${({ theme }) => theme.spacer.spacing3};

  cursor: pointer;
`;

export const ListItemThumbnail = styled(Image)`
  width: 8.6rem;
  height: 8.6rem;

  border-radius: ${({ theme }) => theme.borderRadius.small};
  object-fit: cover;
  object-position: center;
`;

export const ListItemTextContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacer.spacing1};
`;

export const ListItemName = styled.span`
  font-size: 1.8rem;
  line-height: 2.8rem;
  font-weight: bold;
`;

export const ListItemStars = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacer.spacing2};
`;

export const ListItemBookmark = styled.div`
  width: 2rem;
`;

export const ratingTextStyle = css`
  font-weight: 600;
`;

export const subTextStyle = css`
  color: ${({ theme }) => theme.color.gray600};
`;
