import React from "react";
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
  width: 261px;
  height: 83px;
`;

const FunctionBtns = styled.div`
  width: 35%;
  display: flex;
  justify-content: space-around;
`;

const TeamMateBtn = styled.button`
  font-size: 1.5rem;
  font-weight: 700;
  padding: 0.5rem 1rem;
  background: none;
  border: none;
  color: white;
  cursor: pointer;
  margin-right: 1rem;
`;

const TeamBtn = styled.button`
  font-size: 1.5rem;
  font-weight: 700;
  padding: 0.5rem 1rem;
  background: none;
  border: none;
  color: white;
  cursor: pointer;
  margin-right: 1rem;
`;

const LoginBtn = styled.button`
  font-size: 1rem;
  font-weight: 700;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 10px;
  background-color: #891A0E;
  color: white;
  cursor: pointer;
  &:hover {
    border: 1px solid #891A0E;
    background-color: white;
    color: #891A0E;
  }
`;

export default function Header() {
  return (
    <HeaderBody>
      <HeaderMain>
        <SiteTitle></SiteTitle>
        <FunctionBtns>
          <TeamMateBtn>팀원 모집</TeamMateBtn>
          <TeamBtn>팀 모집</TeamBtn>
          <LoginBtn>로그인</LoginBtn>
        </FunctionBtns>
      </HeaderMain>
    </HeaderBody>
  );
}