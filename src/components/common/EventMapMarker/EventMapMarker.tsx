import ClickedPinIcon from "../../../asset/clicked-pin-icon.svg";
import PinIcon from "../../../asset/pin-icon.svg";
import { MapMarker } from "react-kakao-maps-sdk";

import { theme } from "style/Theme";

interface EventMapMarkerProps {
  /** 마커를 표시할 위치 - 경도, 위도 */
  markerPosition: { lat: number; lng: number };
  /** 마커가 클릭 여부 */
  isMarkerClicked: boolean;
  /**  마커가 클릭되었을 때 발생할 액션 */
  onMarkerClick: () => void;
}

const MARKER_SIZE = {
  CLICKED: 42,
  NOT_CLICKED: 36,
} as const;

function EventMapMarker({
  markerPosition,
  isMarkerClicked,
  onMarkerClick,
}: EventMapMarkerProps) {
  const icon = isMarkerClicked ? ClickedPinIcon : PinIcon;
  const size = isMarkerClicked ? MARKER_SIZE.CLICKED : MARKER_SIZE.NOT_CLICKED;

  return (
    <MapMarker
      position={markerPosition}
      onClick={onMarkerClick}
      image={{
        src: icon,
        size: {
          width: size,
          height: size,
        },
      }}
      zIndex={isMarkerClicked ? theme.zIndex.overlay : 1}
    />
  );
}

export default EventMapMarker;
