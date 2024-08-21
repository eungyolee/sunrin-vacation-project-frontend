import React from "react";
import styled from "styled-components";

const MainDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  text-align: center;
`;

const FlexElement = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 40vh;
`;

const Infomation = styled.div``;

const SiteTitle = styled.div`
  background-image: url(./TeamMate1.png);
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  // image 522x166
  width: 522px;
  height: 166px;
`;

const SiteDescription = styled.p`
  font-size: 1.5rem;
  font-weight: 400;
  margin-bottom: 1rem;
  color: #72312A;
`;

const StartBtn = styled.button`
  font-size: 1.5rem;
  font-weight: 700;
  padding: 1rem 2rem;
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

export default function Start({ login }) {
  return (
    <MainDiv>
      <FlexElement>
        <Infomation>
          <SiteTitle></SiteTitle>
          <SiteDescription>선린인터넷고등학교 교내대회 팀 매칭 서비스</SiteDescription>
        </Infomation>
        <StartBtn onClick={() => login()}>시작하기 →</StartBtn>
      </FlexElement>
    </MainDiv>
  );
}