import ClickedPinIcon from "../../../asset/clicked-pin-icon.svg";
import PinIcon from "../../../asset/pin-icon.svg";
import { MapMarker } from "react-kakao-maps-sdk";

import { theme } from "style/Theme";

interface EventMapMarkerProps {
  position: { lat: number; lng: number };
  isClicked: boolean;
  onClick: () => void;
}

function EventMapMarker({ position, isClicked, onClick }: EventMapMarkerProps) {
  const icon = isClicked ? ClickedPinIcon : PinIcon;

  return (
    <MapMarker
      position={position}
      onClick={onClick}
      image={{
        src: icon,
        size: {
          width: 36,
          height: 36,
        },
      }}
      zIndex={isClicked ? theme.zIndex.overlay : 1}
    />
  );
}

export default EventMapMarker;
