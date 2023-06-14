import React from "react";
import { Campus } from "types/commonTypes";

import useStoredState from "hooks/useStoredState";

type CampusContext = Campus | null;

type SetCampusContext = (value: CampusContext) => void;

export const campusContext = React.createContext<CampusContext>(null);
export const setCampusContext = React.createContext<SetCampusContext>(() => {});

function CampusContextProvider({ children }: React.PropsWithChildren<{}>) {
  const [campus, setCampus] = useStoredState<CampusContext>("campus", null);

  return (
    <campusContext.Provider value={campus}>
      <setCampusContext.Provider value={setCampus}>
        {children}
      </setCampusContext.Provider>
    </campusContext.Provider>
  );
}

export default CampusContextProvider;
