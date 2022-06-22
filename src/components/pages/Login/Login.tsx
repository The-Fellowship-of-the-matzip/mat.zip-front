import axios from "axios";
import { useEffect, useRef } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

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
      alert("로그인에 실패했습니다. 다시 시도해주세요");
      navigate("/");
      return;
    }

    const {
      data: { accessToken },
    } = response;
    login(accessToken);
    navigate("/");
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
