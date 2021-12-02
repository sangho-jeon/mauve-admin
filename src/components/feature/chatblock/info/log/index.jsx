import React from "react";
import { Container, Title, Text, LogContainer } from "./styled";
import Log from "../../../../shared/log";

const LogSection = () => {
  return (
  <Container>
    <Title>
      <Text>날짜</Text>
      <Text>체중</Text>
      <Text>아침</Text>
      <Text>점심</Text>
      <Text>저녁</Text>
      <Text>간식</Text>
    </Title>
    <LogContainer>
      <Log></Log>
      <Log></Log>
      <Log></Log>
      <Log></Log>
    </LogContainer>
  </Container>
  );
};

export default LogSection;
