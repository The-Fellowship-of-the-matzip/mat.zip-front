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

/**
 * @param {Store[] | BookmarkStore[]} stores - 지도에 표시할 상점 목록
 * @param {Position["latlng"]} centerPosition - 지도의 중심 위치를 나타내는 위도와 경도
 *
 * @returns {Object} center와 positions을 반환하며, setCenter 메소드를 통해 중심 위치를 업데이트 할 수 있다.
 */

export const useMap = (
  stores: Store[] | BookmarkStore[],
  centerPosition: Position["latlng"]
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
