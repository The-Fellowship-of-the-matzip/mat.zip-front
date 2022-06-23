import { useContext } from "react";

import { SetLoginContext } from "context/LoginContextProvider";

const useLogin = () => {
  const setIsLoggedIn = useContext(SetLoginContext);

  const login = (accessToken: string) => {
    window.sessionStorage.setItem("accessToken", accessToken);
    setIsLoggedIn(true);
  };

  const logout = () => {
    window.sessionStorage.removeItem("accessToken");
    setIsLoggedIn(false);
  };

  return { login, logout };
};

export default useLogin;
