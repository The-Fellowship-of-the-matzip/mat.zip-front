import styled, { css } from "styled-components";

export const HeaderWrapper = styled.header`
  display: flex;
  justify-content: space-between;
  padding: ${({ theme }) => theme.spacer.spacing3};
  margin-bottom: ${({ theme }) => theme.spacer.spacing4};
  background-color: white;
`;

export const headerStyle = css`
  position: absolute;
  left: 50%;
  font-weight: bold;
  transform: translateX(-50%);
`;

export const MapWrapper = styled.div`
  height: calc(100vh - 208px);

  & #react-kakao-maps-sdk-map-container {
    width: 100%;
    height: 100%;
  }
`;

export const StoreListWrapper = styled.div`
  position: absolute;
  bottom: ${({ theme }) => theme.spacer.spacing3};
  width: calc(100% - 16px);
  z-index: ${({ theme }) => theme.zIndex.overlay};

  & li {
    width: calc(100% - 16px);
    margin: ${({ theme }) => theme.spacer.spacing3};
    padding: ${({ theme }) => theme.spacer.spacing3};
    border-radius: ${({ theme }) => theme.borderRadius.small};
    box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.15);
  }
`;
