/* eslint-disable react-hooks/exhaustive-deps */
import { useMemo, useState } from "react";

type ReturnValues<T> = [T, (value: T) => void];

function useStoredState<T>(key: string, initialValue: T): ReturnValues<T> {
  const savedData = useMemo(
    () => JSON.parse(window.localStorage.getItem(key) as string),
    []
  );
  const [data, _setData] = useState<T>(savedData || initialValue);

  const setData = (value: T) => {
    _setData(value);
    window.localStorage.setItem(key, JSON.stringify(value));
  };

  return [data, setData];
}

export default useStoredState;
