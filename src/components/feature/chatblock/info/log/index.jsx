import React, { useEffect, useState } from "react";
import { Container, Title, Text, LogContainer } from "./styled";
import Log from "../../../../shared/log";
import InfoService from "../../../../../apis/info/info-service";

const infoService = new InfoService();

const LogSection = (prop) => {
  const [logList, setLogList] = useState([]);

  const getLogData = async () => {
    try {
      const { log } = await infoService.getUserLog(prop.id);
      setLogList(log); // 이부분은 밑에 slice함수에서 에러가 나서 막아놨습니다. 데이터가 있을 때만 slice할 수 있도록 변경하는것이 좋을 것 같습니다.
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
      return e.body.kilograms;
    } else {
      return "입력 전";
    }
  };

  const getMenu = (e) => {
    if (e) {
      return e.body.location;
    }
  };

  const isData = (e) => {
    if (JSON.stringify(e) === "[]") {
      return false;
    } else {
      return true;
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
        { isData(logList) 
          ? logList // 효원님 여기서 에러가 납니다. 아마 받아온 api 데이터가 아직 없어서 slice함수가 안 먹히는 것 같습니다.
            .slice(0)
            .reverse()
            .map((log) =>
              Object.keys(log).map((date) => (
                <Log
                  date={date}
                  morning={getWeight(log[date].weight_morning)}
                  night={getWeight(log[date].weight_night)}
                  breakfast={getMenu(log[date].breakfast)}
                  lunch={getMenu(log[date].lunch)}
                  dinner={getMenu(log[date].dinner)}
                  snack={getMenu(log[date].snack)}
                ></Log>
              ))
            )
          : ""
        }
      </LogContainer>
    </Container>
  );
};

export default LogSection;
