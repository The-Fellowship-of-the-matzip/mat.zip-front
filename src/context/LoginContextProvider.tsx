import React, { useState } from "react";

import { ACCESS_TOKEN } from "constants/api";

const hasAccessToken = !!ACCESS_TOKEN;

export const LoginContext = React.createContext<boolean>(false);
export const SetLoginContext = React.createContext<
  React.Dispatch<React.SetStateAction<boolean>>
>(() => {});

function LoginContextProvider({ children }: React.PropsWithChildren<{}>) {
  const [isLoggedIn, setIsLoggedIn] = useState(hasAccessToken);

  return (
    <LoginContext.Provider value={isLoggedIn}>
      <SetLoginContext.Provider value={setIsLoggedIn}>
        {children}
      </SetLoginContext.Provider>
    </LoginContext.Provider>
  );
}

export default LoginContextProvider;
