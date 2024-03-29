import React, { useEffect, useState, useContext } from "react";
import { Container, Title, Text, LogContainer , DateText } from "./styled";
import Log from "../../../../shared/log";
import InfoService from "../../../../../apis/info/info-service";
import { Context } from "../../../../../utils/contextProvider";

const infoService = new InfoService();

const LogSection = (prop) => {
  const [logList, setLogList] = useState([]);
  const { value, contextDispatch } = useContext(Context);

  const getLogData = async () => {
    try {
      const { log } = await infoService.getUserLog(
        prop.id,
        value.accessToken,
        value.refreshToken
      );
      setLogList(log);
      console.log(log);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getLogData();
  }, [prop.id]);

  const getWeight = (e) => {
    if (e) {
      return e.body.kilograms + "kg";
    }
  };

  const getMenuThumbnail = (e) => {
    if (e) {
      return e.body.thumbnail + "&w=120&h=120";
    }
  };

  const getMenuLocation = (e) => {
    if (e) {
      return e.body.location;
    }
  };

  const getTime = (e) => {
    if (e) {
      return e.created_at_time;
    }
  };

  const isData = (e) => {
    if (JSON.stringify(e) === "[]") {
      return false;
    } else {
      return true;
    }
  };

  return (
    <Container>
      <Title>
        <DateText>날짜</DateText>
        <Text>체중</Text>
        <Text>아침</Text>
        <Text>점심</Text>
        <Text>저녁</Text>
        <Text>간식</Text>
        <Text>야식</Text>
      </Title>
      <LogContainer>
        {isData(logList) &&
          logList.userLogRecord
            .slice(0)
            .reverse()
            .map((log) =>
              Object.keys(log).map((date) => (
                <Log
                  date={date}
                  morning={getWeight(log[date].weight_morning)}
                  night={getWeight(log[date].weight_night)}
                  morningTime={getTime(log[date].weight_morning)}
                  nightTime={getTime(log[date].weight_night)}
                  breakfastLocation={getMenuLocation(log[date].breakfast)}
                  lunchLocation={getMenuLocation(log[date].lunch)}
                  dinnerLocation={getMenuLocation(log[date].dinner)}
                  snackLocation={getMenuLocation(log[date].snack)}
                  yasikLocation={getMenuLocation(log[date].yasik)}
                  breakfastThumbnail={getMenuThumbnail(log[date].breakfast)}
                  lunchThumbnail={getMenuThumbnail(log[date].lunch)}
                  dinnerThumbnail={getMenuThumbnail(log[date].dinner)}
                  snackThumbnail={getMenuThumbnail(log[date].snack)}
                  yasikThumbnail={getMenuThumbnail(log[date].yasik)}
                  breakfastTime={getTime(log[date].breakfast)}
                  lunchTime={getTime(log[date].lunch)}
                  dinnerTime={getTime(log[date].dinner)}
                  snackTime={getTime(log[date].snack)}
                  yasikTime={getTime(log[date].yasik)}
                ></Log>
              ))
            )}
      </LogContainer>
    </Container>
  );
};

export default LogSection;
