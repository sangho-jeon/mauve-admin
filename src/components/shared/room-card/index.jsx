import React, { useState } from "react";
import {
  Card,
  Name,
  Text,
  Count,
  Waiting,
  Left,
  Right,
  Top,
  Bottom,
  Weight,
  Diet,
} from "./styled";
import moment from "moment";

const RoomCard = (props) => {
  const [waitingTime, setWaitingTime] = useState("");

  const getWaitTime = (recent, user) => {
    if (JSON.stringify(recent) === "{}") {
      return;
    }
    if (recent.created_at != user) {
      return;
    }
    // console.log("차이", recent.created_at, user);
    const chatDateStr = user;
    const chatDateISO = chatDateStr.replace(" ", "T");
    const chatDate = new Date(chatDateISO);
    chatDate.setHours(chatDate.getHours() + 9);

    const nowDate = new Date(moment());
    nowDate.setHours(nowDate.getHours() + 9);

    const waitTime = (nowDate.getTime() - chatDate.getTime()) / 1000;

    const waitHour = parseInt(waitTime / 3600);
    const waitMin = parseInt((waitTime - waitHour * 3600) / 60);
    const waitSec = parseInt(waitTime - waitHour * 3600 - waitMin * 60);

    setWaitingTime(waitHour + ":" + waitMin + ":" + waitSec);
  };

  const repeat = setInterval(function() {
    getWaitTime(props.recentTime, props.userTime);
  }, 1000);

  if (JSON.stringify(props.recentTime) === "{}") {
    clearInterval(repeat);
  }

  const getRecentChat = (e) => {
    if (e.tag) {
      if (e.tag === "weight") {
        return "체중을 입력했습니다";
      } else if (
        e.tag === "breakfast" ||
        e.tag === "lunch" ||
        e.tag === "dinner"
      ) {
        return "식단을 입력했습니다";
      } else if (e.tag === "chat") {
        return e.body.text;
      }
    }
    return "";
  };

  return (
    <Card
      onClick={() => {
        props.click(props.id, props.userId);
      }}
    >
      <Top>
        <Left>
          <Name>{props.name}</Name>
          <Count>{props.count}</Count>
        </Left>
        <Right>
          체중
          <Weight sender={props.morning} />
          <Weight sender={props.night} />
          식단
          <Diet sender={props.breakfast} />
          <Diet sender={props.lunch} />
          <Diet sender={props.dinner} />
        </Right>
      </Top>
      <Bottom>
        <Text>{getRecentChat(props.text)}</Text>
        <Waiting>{waitingTime}</Waiting>
      </Bottom>
    </Card>
  );
};

export default RoomCard;
