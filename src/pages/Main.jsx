import React, { useState } from "react";
import Start from "../components/Start";
import AfterLogin from "../components/AfterLogin";

export default function Main() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div>
      <h1>메인 화면입니다.</h1>
      {isLoggedIn ? <AfterLogin /> : <Start />}
      <button onClick={() => setIsLoggedIn(!isLoggedIn)}>테스트용 화면 전환</button>
    </div>
  );
}