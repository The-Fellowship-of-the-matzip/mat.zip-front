import ClickedPinIcon from "../../../asset/clicked-pin-icon.svg";
import PinIcon from "../../../asset/pin-icon.svg";
import { MapMarker } from "react-kakao-maps-sdk";

import { theme } from "style/Theme";

interface EventMapMarkerProps {
  markerPosition: { lat: number; lng: number };
  isMarkerClicked: boolean;
  onMarkerClick: () => void;
}

function EventMapMarker({
  markerPosition, // 마커를 표시할 위치 - 경도, 위도
  isMarkerClicked, // 마커가 클릭 여부
  onMarkerClick, // 마커가 클릭되었을 때 발생할 액션
}: EventMapMarkerProps) {
  const icon = isMarkerClicked ? ClickedPinIcon : PinIcon;

  return (
    <MapMarker
      position={markerPosition}
      onClick={onMarkerClick}
      image={{
        src: icon,
        size: {
          width: 36,
          height: 36,
        },
      }}
      zIndex={isMarkerClicked ? theme.zIndex.overlay : 1}
    />
  );
}

export default EventMapMarker;
