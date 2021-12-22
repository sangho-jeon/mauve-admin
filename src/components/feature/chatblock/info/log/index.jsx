import React from "react";
import { Container, Title, Text, LogContainer } from "./styled";
import Log from "../../../../shared/log";
import dummy from "./dummy.json";

const LogSection = () => {

  const getWeight = (e) => {
    if (e) {
      return e.body.kilograms;
    } else {
      return "입력 전";
    }
  };

  const getMenu = (e) => {
    if (e) {
      return e.body.location;
    }
  }

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
      {dummy.body.userLogRecord.slice(0).reverse().map((dateLog) => 
        (Object.keys(dateLog).map((date) => (
          <Log
            date = {date}
            morning = {getWeight(dateLog[date].weight_morning)}
            night = {getWeight(dateLog[date].weight_night)}
            breakfast = {getMenu(dateLog[date].breakfast)}
            lunch = {getMenu(dateLog[date].lunch)}
            dinner = {getMenu(dateLog[date].dinner)}
            snack = {getMenu(dateLog[date].snack)}
          ></Log>
        )))
      )}
    </LogContainer>
  </Container>
  );
};

export default LogSection;
