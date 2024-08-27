import React, { useEffect, useState } from "react";
import Start from "../components/Start";
import AfterLogin from "../components/AfterLogin";
import styled from "styled-components";

const RootDiv = styled.div`
  height: 100vh;
`;

export default function Main() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    if (isLoggedIn === "true") {
      setIsLoggedIn(true);
    }
  }, []);

  const login = () => {
    // 로그인 상태 영구 저장
    localStorage.setItem("isLoggedIn", "true");
    setIsLoggedIn(true);
  };

  return (
    <RootDiv>
      {isLoggedIn ? <AfterLogin /> : <Start login={login} />}
    </RootDiv>
  );
}