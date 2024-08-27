import React from "react";
import styled from "styled-components";
import Header from "./Header";
import { useNavigate } from "react-router-dom";

const MainDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  text-align: center;
`;

const AllItems = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: space-around;
  width: 90%;
  height: 100%;
  margin: 0 auto;
`;

const TeamMate = styled.div`
  width: 100%;
`;

const Team = styled.div`
  width: 100%;
`;

const MatchingTitle = styled.h2`
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 1rem;
  text-align: left;
`;

const MatchingDescription = styled.p`
  font-size: 1rem;
  font-weight: 400;
  margin-bottom: 1rem;
  color: #72312A;
  text-align: left;
`;

const Items = styled.div`
  display: flex;
  flex-direction: row;
  overflow-x: auto;
  width: 100%;
`;

const Item = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 400px;
  flex-shrink: 0;
  margin-right: 1rem;
  padding: 0.5rem 1rem 1rem 1rem;
  border: 1px solid #72312A;
  border-radius: 10px;
`;

const WriterInfo = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 3rem;
  border-bottom: 1px solid #72312A;
  padding: 0.5rem;
`;

const Title = styled.h3`
  font-size: 1.5rem;
  font-weight: 700;
  margin: 0;
`;

const Role = styled.p`
  font-size: 1rem;
  font-weight: 400;
  color: #72312A;
  margin: 0;
`;

const Content = styled.p`
  font-size: 1rem;
  font-weight: 400;
  color: #72312A;
`;

export default function AfterLogin() {
  const navigate = useNavigate();

  const TeamMateList = [
    {
      title: "10614 이은교",
      role: "프론트엔드 개발자",
      content: "프론트엔드 개발자 이은교입니다. 선린 해커톤에서 팀을 구하고 있으며 Lorem Ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      title: "10614 이은교",
      role: "프론트엔드 개발자",
      content: "프론트엔드 개발자 이은교입니다. 선린 해커톤에서 팀을 구하고 있으며 Lorem Ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      title: "10614 이은교",
      role: "프론트엔드 개발자",
      content: "프론트엔드 개발자 이은교입니다. 선린 해커톤에서 팀을 구하고 있으며 Lorem Ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      title: "10614 이은교",
      role: "프론트엔드 개발자",
      content: "프론트엔드 개발자 이은교입니다. 선린 해커톤에서 팀을 구하고 있으며 Lorem Ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      title: "10614 이은교",
      role: "프론트엔드 개발자",
      content: "프론트엔드 개발자 이은교입니다. 선린 해커톤에서 팀을 구하고 있으며 Lorem Ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      title: "10614 이은교",
      role: "프론트엔드 개발자",
      content: "프론트엔드 개발자 이은교입니다. 선린 해커톤에서 팀을 구하고 있으며 Lorem Ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      title: "10614 이은교",
      role: "프론트엔드 개발자",
      content: "프론트엔드 개발자 이은교입니다. 선린 해커톤에서 팀을 구하고 있으며 Lorem Ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
  ];

  const TeamList = [
    {
      title: "AnA에서 팀원 모집합니다.",
      role: "프론트엔드 개발자",
      content: "AnA 팀에서 프론트엔드 개발자를 모집합니다. Lorem Ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
      title: "AnA에서 팀원 모집합니다.",
      role: "프론트엔드 개발자",
      content: "AnA 팀에서 프론트엔드 개발자를 모집합니다. Lorem Ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
      title: "AnA에서 팀원 모집합니다.",
      role: "프론트엔드 개발자",
      content: "AnA 팀에서 프론트엔드 개발자를 모집합니다. Lorem Ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
      title: "AnA에서 팀원 모집합니다.",
      role: "프론트엔드 개발자",
      content: "AnA 팀에서 프론트엔드 개발자를 모집합니다. Lorem Ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
      title: "AnA에서 팀원 모집합니다.",
      role: "프론트엔드 개발자",
      content: "AnA 팀에서 프론트엔드 개발자를 모집합니다. Lorem Ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
      title: "AnA에서 팀원 모집합니다.",
      role: "프론트엔드 개발자",
      content: "AnA 팀에서 프론트엔드 개발자를 모집합니다. Lorem Ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
      title: "AnA에서 팀원 모집합니다.",
      role: "프론트엔드 개발자",
      content: "AnA 팀에서 프론트엔드 개발자를 모집합니다. Lorem Ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
      title: "AnA에서 팀원 모집합니다.",
      role: "프론트엔드 개발자",
      content: "AnA 팀에서 프론트엔드 개발자를 모집합니다. Lorem Ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
      title: "AnA에서 팀원 모집합니다.",
      role: "프론트엔드 개발자",
      content: "AnA 팀에서 프론트엔드 개발자를 모집합니다. Lorem Ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
  ]
  return (
    <MainDiv>
      <Header />
      <AllItems>
        <TeamMate>
          <MatchingTitle style={{ marginTop: "0" }}>팀 모집 공고</MatchingTitle>
          <MatchingDescription>소속될 팀을 찾는 공고 게시판입니다.</MatchingDescription>
          <Items>
            {TeamMateList.map((item) => (
              <Item>
                <WriterInfo>
                  <Title>{item.title}</Title>
                  <Role>{item.role}</Role>
                </WriterInfo>
                <Content>
                  {item.content.length > 50 ? item.content.slice(0, 50) + "..." : item.content}
                </Content>
              </Item>
            ))}
          </Items>
        </TeamMate>
        <Team>
          <MatchingTitle>팀원 모집 공고</MatchingTitle>
          <MatchingDescription>팀에 새로 들어올 팀원을 모집하는 공고 게시판입니다.</MatchingDescription>
          <Items>
            {TeamList.map((item) => (
              <Item>
                <WriterInfo>
                  <Title>{item.title}</Title>
                  <Role>{item.role}</Role>
                </WriterInfo>
                <Content>
                  {item.content.length > 50 ? item.content.slice(0, 50) + "..." : item.content}
                </Content>
              </Item>
            ))}
          </Items>
        </Team>
      </AllItems>
    </MainDiv>
  );
}