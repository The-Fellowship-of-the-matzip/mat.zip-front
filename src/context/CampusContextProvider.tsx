import React, { useState } from "react";

type Campus = "잠실" | "선릉";
type CampusContext = Campus | null;

type SetCampusContext = React.Dispatch<React.SetStateAction<CampusContext>>;

export const campusContext = React.createContext<null | CampusContext>(null);
export const setCampusContext =
  React.createContext<null | SetCampusContext>(null);

function CampusContextProvider({ children }: React.PropsWithChildren<{}>) {
  const [campus, setCampus] = useState<CampusContext>(null);

  return (
    <campusContext.Provider value={campus}>
      <setCampusContext.Provider value={setCampus}>
        {children}
      </setCampusContext.Provider>
    </campusContext.Provider>
  );
}

export default CampusContextProvider;
