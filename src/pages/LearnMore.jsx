import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Header from "../components/Header";
import axios from "axios";

const RootDiv = styled.div`
  height: 100vh;
`;

const MainDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 90%;
  height: 82.5%;
  margin: 0 auto;
  text-align: center;
`;

const Item = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin-top: 2rem;
  border: 2px solid #72312A;
  border-radius: 10px;
  padding-top: 2rem;
  padding-bottom: 1rem;
  height: 100%;
`;

const TypeInfo = styled.div`
  font-size: 2rem;
  font-weight: 700;
  text-align: left;
  margin-top: 2rem;
`;

const WriterInfo = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  width: 90%;
  padding-bottom: 1rem;
  border-bottom: 1px solid #ba3838;
`;

const Title = styled.h2`
  font-size: 1.75rem;
  font-weight: 700;
  text-align: left;
  margin: 0;
`;

const Role = styled.p`
  font-size: 1.1rem;
  font-weight: 400;
  margin: 0;
  color: #72312A;
  text-align: left;
  margin-left: 3rem;
`;

const Content = styled.p`
  font-size: 1rem;
  font-weight: 400;
  margin: 1.5rem;
  text-align: left;
  color: #72312A;
  width: 90%;
`;

export default function LearnMore() {
  const [item, setItem] = useState(null);
  useEffect(() => {
    const url = new URL(window.location.href);
    const id = url.searchParams.get("id");
    axios.get(`http://localhost:3001/posts`)
      .then((res) => {
        const item = res.data.find((item) => item._id === id);
        setItem(item);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <RootDiv>
      <Header />
      <MainDiv>
        <TypeInfo>
          {item && item.type === "team" ? "팀원 모집" : "팀원 구함"}
        </TypeInfo>
        {item && (
          <Item>
            <WriterInfo>
              <Title>{item.title}</Title>
              <Role>{item.field}</Role>
            </WriterInfo>
            <Content>{item.content}</Content>
          </Item>
        )}
      </MainDiv>
    </RootDiv>
  );
}