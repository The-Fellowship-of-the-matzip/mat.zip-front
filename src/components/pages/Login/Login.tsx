/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useRef } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

import { PATHNAME } from "constants/routes";

import useLogin from "hooks/useLogin";

import sendLoginRequest from "api/sendLoginRequest";

import * as S from "components/pages/Login/Login.style";

function Login() {
  const isInitial = useRef(true);
  const navigate = useNavigate();

  const [searchParams] = useSearchParams();
  const code = searchParams.get("code");

  const { login } = useLogin();

  const handleLogin = async () => {
    try {
      const accessToken = await sendLoginRequest(code as string);
      login(accessToken);
    } catch ({ message }) {
      alert(message);
    } finally {
      navigate(PATHNAME.HOME);
    }
  };

  useEffect(() => {
    if (isInitial.current) {
      isInitial.current = false;
      return;
    }

    handleLogin();
  }, []);

  return <S.MainContainer>로그인 진행 중</S.MainContainer>;
}

export default Login;
