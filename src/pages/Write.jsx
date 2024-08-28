import React, { useState } from "react";
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
  height: 100%;
  margin: 0 auto;
  text-align: center;
`;

const InfoTitle = styled.h2`
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 1rem;
  text-align: left;
`;

const TypeRadio = styled.div`
  display: flex;
  margin-bottom: 1rem;
  width: 20%;
  justify-content: space-between;
`;

const Team = styled.div`
  margin-right: 1rem;
`;

const TeamMate = styled.div`
  margin-right: 1rem;
`;

const CompetitionSelect = styled.select`
  margin-bottom: 1rem;
  padding: 0.5rem;
`;

const CompetitionOption = styled.option``;

const TitleInput = styled.input`
  width: 80%;
  padding: 0.5rem;
  margin-bottom: 1rem;
`;

const ContextInput = styled.textarea`
  width: 100%;
  height: 20rem;
  padding: 0.5rem;
  margin-bottom: 1rem;
  resize: none;
`;

// Radio + Lable styling
const Radio = styled.input``;

const Label = styled.label``;

const SubmitBtn = styled.input`
  padding: 0.5rem 1rem;
  background-color: #BA3838;
  color: white;
  font-size: 1rem;
  font-weight: 700;
  border: none;
  cursor: pointer;
`;

const FieldInput = styled.input`
  width: 80%;
  padding: 0.5rem;
  margin-left: 1rem;
  margin-bottom: 1rem;
`;

const InfoInput = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
`;

export default function Write() {
  const [type, setType] = useState("team");
  const [competition, setCompetition] = useState("선린 해커톤");
  const [field, setField] = useState("");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = async () => {
    if (field === "") {
      alert("분야를 입력하세요.");
      return;
    }
    if (title === "") {
      alert("제목을 입력하세요.");
      return;
    }
    if (content === "") {
      alert("내용을 입력하세요.");
      return;
    }
    await axios.post("http://localhost:3001/posts", {
      type: type,
      competition: competition,
      field: field,
      title: title,
      content: content,
    })
    .then((response) => {
      console.log(response);
      alert("글 작성이 완료되었습니다.");
      window.location.href = "/";
    })
    .catch((error) => {
      console.error(error);
    });
  };

  return (
    <RootDiv>
      <Header />
      <MainDiv>
        <InfoTitle>글 작성</InfoTitle>
        <TypeRadio>
          <Team onClick={() => setType("team")}>
            <Radio type="radio" name="type" id="team" defaultChecked />
            <Label for="team">팀 구해요</Label>
          </Team>
          <TeamMate onClick={() => setType("teammate")}>
            <Radio type="radio" name="type" id="teammate" />
            <Label for="teammate">팀원 구해요</Label>
          </TeamMate>
        </TypeRadio>
        <InfoInput>
          <CompetitionSelect name="competition" id="competition">
          <CompetitionOption value="선린 해커톤" onSelect={() => setCompetition("선린 해커톤")}>선린 해커톤</CompetitionOption>
          <CompetitionOption value="천하제일코딩대회" onSelect={() => setCompetition("천하제일코딩대회")}>천하제일코딩대회</CompetitionOption>
          <CompetitionOption value="디지털콘텐츠경진대회" onSelect={() => setCompetition("디지털콘텐츠경진대회")}>디지털콘텐츠경진대회</CompetitionOption>
        </CompetitionSelect>
        <FieldInput type="text" placeholder="분야를 입력하세요." maxLength={20} onChange={(e) => setField(e.target.value)} />
        </InfoInput>
        <TitleInput type="text" placeholder="제목을 입력하세요." maxLength={80} onChange={(e) => setTitle(e.target.value)} />
        <ContextInput placeholder="내용을 입력하세요." maxLength={2000} onChange={(e) => setContent(e.target.value)}></ContextInput>
        <SubmitBtn type="submit" value="제출" onClick={() => handleSubmit()} />
      </MainDiv>
    </RootDiv>
  );
}