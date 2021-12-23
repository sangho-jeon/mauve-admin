import React, { useEffect, useState } from "react";
import { Container, Title, Text, LogContainer } from "./styled";
import Log from "../../../../shared/log";
import InfoService from "../../../../../apis/info/info-service";

const infoService = new InfoService();

const LogSection = (prop) => {
  const [logList, setLogList] = useState([]);

  const getLogData = async () => {
    try {
      const { log } = await infoService.getUserLog(prop);
      setLogList(log);
      console.log(log);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getLogData();
  }, [prop]);

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
      {logList.slice(0).reverse().map((log) => 
        (Object.keys(log).map((date) => (
          <Log
            date = {date}
            morning = {getWeight(log[date].weight_morning)}
            night = {getWeight(log[date].weight_night)}
            breakfast = {getMenu(log[date].breakfast)}
            lunch = {getMenu(log[date].lunch)}
            dinner = {getMenu(log[date].dinner)}
            snack = {getMenu(log[date].snack)}
          ></Log>
        )))
      )}
    </LogContainer>
  </Container>
  );
};

export default LogSection;
