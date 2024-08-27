import React from "react";
// import styled from "styled-components";
import { GoogleLogin, GoogleOAuthProvider } from "@react-oauth/google";

export default function LoginBtn({ login }) {
  const handleLoginSuccess = async (response) => {

    try {
      const res = await fetch(`https://www.googleapis.com/oauth2/v3/tokeninfo?id_token=${response.credential}`);
      const userInfo = await res.json();
      console.log(userInfo);

      // 만약 이메일이 sunrint.hs.kr로 끝나지 않으면 로그인을 거부합니다.
      if (!userInfo.email.endsWith("sunrint.hs.kr")) {
        alert("선린인터넷고등학교 이메일로 로그인해주세요.");
        return;
      } else {
        login();
      }
    } catch (error) {
      console.error("Error verifying ID token:", error);
    }
  };

  return (
    <GoogleOAuthProvider clientId={process.env.REACT_APP_GOOGLE_AUTH_CLIENT_ID}>
      <GoogleLogin onSuccess={handleLoginSuccess} onError={(err) => {
        alert("로그인에 실패했습니다.", err);
      }} width={'500px'} />
    </GoogleOAuthProvider>
  )
}