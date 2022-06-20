import React, { useState } from "react";

const hasAccessToken = !!window.sessionStorage.getItem("accessToken");

export const loginContext = React.createContext<boolean>(false);
export const setLoginContext = React.createContext<
  React.Dispatch<React.SetStateAction<boolean>>
>(() => {});

function LoginContextProvider({ children }: React.PropsWithChildren<{}>) {
  const [isLogin, setIsLogin] = useState(hasAccessToken);

  return (
    <loginContext.Provider value={isLogin}>
      <setLoginContext.Provider value={setIsLogin}>
        {children}
      </setLoginContext.Provider>
    </loginContext.Provider>
  );
}

export default LoginContextProvider;
