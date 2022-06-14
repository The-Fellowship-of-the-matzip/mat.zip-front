import { useEffect, useState } from "react";

const useLogin = () => {
  const [isLogin, setIsLogin] = useState(false);

  useEffect(() => {
    const accessToken = sessionStorage.getItem("accessToken");
    if (accessToken) {
      setIsLogin(true);
    }
    setIsLogin(false);
  }, []);

  return [isLogin];
};

export default useLogin;
