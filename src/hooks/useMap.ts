import { useEffect, useState } from "react";
import type { BookmarkStore, Store } from "types/common";

export interface Position {
  id: number;
  latlng: {
    lat: number;
    lng: number;
  };
  addressName: string;
}

export const useMap = (
  stores: Store[] | BookmarkStore[],
  centerPosition: Position["latlng"] // 지도의 중심 위치
) => {
  const [center, setCenter] = useState<Position["latlng"]>(centerPosition);
  const [positions, setPositions] = useState<Position[]>([]);

  const getPosition = (store: Store | BookmarkStore): Promise<Position> => {
    const geocoder = new kakao.maps.services.Geocoder();

    return new Promise((resolve, reject) => {
      geocoder.addressSearch(store.address, (result, status) => {
        if (status === kakao.maps.services.Status.OK) {
          resolve({
            id: store.id,
            latlng: {
              lat: Number(result[0].y),
              lng: Number(result[0].x),
            },
            addressName: result[0].address_name,
          });
        } else {
          reject(new Error("없는 주소입니다."));
        }
      });
    });
  };

  const getStorePositions = () => {
    if (!stores) {
      setPositions([]);

      return;
    }

    const getAddressPromises = stores.map(getPosition);

    Promise.all(getAddressPromises).then((results) => {
      setPositions([...results]);
    });
  };

  useEffect(() => {
    getStorePositions();
  }, [stores]);

  return { center, positions, setCenter };
};
