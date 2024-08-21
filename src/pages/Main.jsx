import React, { useState } from "react";
import Start from "../components/Start";
import AfterLogin from "../components/AfterLogin";
import styled from "styled-components";

const RootDiv = styled.div`
  height: 100vh;
`;

export default function Main() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const login = () => {
    setIsLoggedIn(!isLoggedIn);
  };

  return (
    <RootDiv>
      {isLoggedIn ? <AfterLogin /> : <Start login={login} />}
    </RootDiv>
  );
}