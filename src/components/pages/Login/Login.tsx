import axios from "axios";
import { useEffect, useRef } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

import MESSAGES from "constants/messages";
import { PATHNAME } from "constants/routes";

import useLogin from "hooks/useLogin";

import * as S from "components/pages/Login/Login.style";

function Login() {
  const isInitial = useRef(true);
  const navigate = useNavigate();

  const [searchParams] = useSearchParams();
  const code = searchParams.get("code");

  const { login } = useLogin();

  const sendLoginRequest = async () => {
    const response = await axios.get(`https://matzip.link/api/login`, {
      params: { code },
    });

    if (response.status !== 200) {
      alert(MESSAGES.LOGIN_FAIL);
      navigate(PATHNAME.HOME);
      return;
    }

    const {
      data: { accessToken },
    } = response;
    login(accessToken);
    navigate(PATHNAME.HOME);
  };

  useEffect(() => {
    if (isInitial.current) {
      isInitial.current = false;
      return;
    }
    sendLoginRequest();
  }, []);

  return <S.MainContainer>로그인 진행 중</S.MainContainer>;
}

export default Login;
