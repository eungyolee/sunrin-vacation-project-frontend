import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const HeaderBody = styled.header`
  display: flex;
  align-items: center;
  padding: 1rem 0;
  background-color: #BA3838;
  color: white;
  width: 100%;
  box-shadow: 0 0 10px rgba(0, 0, 0, 1.0);
  z-index: 100;
`;

const HeaderMain = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 90%;
  margin: 0 auto;
`;

const SiteTitle = styled.div`
  background-image: url(./TeamMate1.png);
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  width: 195px;
  height: 60px;
  cursor: pointer;
`;

const FunctionBtns = styled.div`
  display: flex;
  width: 20%;
  justify-content: space-between;
  align-items: center;
`;

// const TeamMateBtn = styled.button`
//   font-size: 1.5rem;
//   font-weight: 700;
//   padding: 0.5rem 1rem;
//   background: none;
//   border: none;
//   color: white;
//   cursor: pointer;
//   margin-right: 1rem;
// `;

// const TeamBtn = styled.button`
//   font-size: 1.5rem;
//   font-weight: 700;
//   padding: 0.5rem 1rem;
//   background: none;
//   border: none;
//   color: white;
//   cursor: pointer;
//   margin-right: 1rem;
// `;

const WriteBtn = styled.button`
  font-size: 1.5rem;
  font-weight: 700;
  padding: 1.25rem;
  background: none;
  border: none;
  color: white;
  cursor: pointer;
  margin-right: 1rem;
`;

const LoginBtn = styled.button`
  font-size: 1rem;
  font-weight: 700;
  padding: 1.25rem;
  height: 70%;
  border: none;
  border-radius: 10px;
  background-color: #891A0E;
  color: white;
  cursor: pointer;
  &:hover {
    background-color: white;
    color: #891A0E;
  }
`;

export default function Header() {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.setItem("isLoggedIn", "false");
    navigate("/");
    window.location.reload();
  };

  return (
    <HeaderBody>
      <HeaderMain>
        <SiteTitle onClick={() => navigate("/")}></SiteTitle>
        <FunctionBtns>
          {/* <TeamMateBtn>팀원 모집</TeamMateBtn>
          <TeamBtn>팀 모집</TeamBtn> */}
          <WriteBtn onClick={() => navigate("/write")}>글 작성</WriteBtn>
          <LoginBtn onClick={logout}>로그아웃</LoginBtn>
        </FunctionBtns>
      </HeaderMain>
    </HeaderBody>
  );
}