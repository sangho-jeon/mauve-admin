import React from "react";
import { Container, Title, Text, LogContainer } from "./styled";
import Log from "../../../../shared/log";
import dummy from "./dummy.json";

const LogSection = () => {

  const weight = (e, tag) => ( e.filter((idx) => { return idx.time === tag }));

  const getWeight = (e, tag) => {
    if (weight(e, tag).length === 0) {
      return "입력 전";
    } else {
      return weight(e, tag)[0].kilograms;
    }
  };

  const menu = (e, tag) => ( e.filter((idx) => { return idx.tag === tag }));

  const getMenu = (e, tag) => {
    if (menu(e, tag).length === 0) {
      return "";
    } else {
      return menu(e, tag)[0].body.location;
    }
  };

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
      {dummy.slice(0).reverse().map((dummy) => (
        <Log
          date={dummy.date}
          morning={getWeight(dummy.weight, "morning")}
          night={getWeight(dummy.weight, "night")}
          breakfast={getMenu(dummy.menu, "breakfast")}
          lunch={getMenu(dummy.menu, "lunch")}
          dinner={getMenu(dummy.menu, "dinner")}
          snack={getMenu(dummy.menu, "snack")}
        ></Log>
      ))}
    </LogContainer>
  </Container>
  );
};

export default LogSection;
