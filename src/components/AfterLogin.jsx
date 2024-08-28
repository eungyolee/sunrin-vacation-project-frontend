import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Header from "./Header";
import { useNavigate } from "react-router-dom";
import axios from "axios";

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
  height: 40%;
`;

const Team = styled.div`
  width: 100%;
  height: 40%;
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
  font-size: 1.25rem;
  font-weight: 700;
  margin: 0;
`;

const Role = styled.p`
  font-size: 0.9rem;
  font-weight: 400;
  color: #72312A;
  margin: 0;
`;

const Content = styled.p`
  font-size: 1rem;
  font-weight: 400;
  color: #72312A;
  width: 100%;
  text-align: left;
`;

export default function AfterLogin() {
  const navigate = useNavigate();
  const [teamMateList, setTeamMateList] = useState([]);
  const [teamList, setTeamList] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3001/posts")
      .then((res) => {
        // type이 team인 것만 console log
        setTeamMateList(res.data.filter((item) => item.type === "team"));
      })
      .catch((err) => {
        console.error(err);
      });

    axios
      .get("http://localhost:3001/posts")
      .then((res) => {
        // type이 teammate인 것만 필터링
        setTeamList(res.data.filter((item) => item.type === "teammate"));
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <MainDiv>
      <Header />
      <AllItems>
        <TeamMate>
          <MatchingTitle style={{ marginTop: "0" }}>팀 모집 공고</MatchingTitle>
          <MatchingDescription>소속될 팀을 찾는 공고 게시판입니다.</MatchingDescription>
          <Items>
            {teamMateList.map((item) => (
              <Item onClick={() => navigate(`/learn-more?id=${item._id}`)}>
                <WriterInfo>
                  <Title>{item.title}</Title>
                  <Role>{item.field}</Role>
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
            {teamList.map((item) => (
              <Item onClick={() => navigate(`/learn-more?id=${item._id}`)}>
                <WriterInfo>
                  <Title>{item.title}</Title>
                  <Role>{item.field}</Role>
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