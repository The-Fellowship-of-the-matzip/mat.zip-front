import { useContext } from "react";

import { ACCESS_TOKEN } from "constants/api";

import { SetLoginContext } from "context/LoginContextProvider";

const useLogin = () => {
  const setIsLoggedIn = useContext(SetLoginContext);

  const login = (accessToken: string) => {
    window.sessionStorage.setItem(ACCESS_TOKEN, accessToken);
    setIsLoggedIn(true);
  };

  const logout = () => {
    window.sessionStorage.removeItem(ACCESS_TOKEN);
    setIsLoggedIn(false);
  };

  return { login, logout };
};

export default useLogin;
