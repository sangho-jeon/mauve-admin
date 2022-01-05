import React, { useState, useEffect, useRef } from "react";
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

const useInterval = (callback, delay) => {
  const savedCallback = useRef();

  // Remember the latest callback.
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // Set up the interval.
  useEffect(() => {
    function tick() {
      savedCallback.current();
    }
    if (delay !== null) {
      let id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
};

const RoomCard = (props) => {
  const [waitingTime, setWaitingTime] = useState("");
  
  useInterval(() => {
    getWaitTime(props.recentChat, props.userChatTime);
  }, 1000);

  const getWaitTime = (recent, time) => {
    if (JSON.stringify(recent) === "{}" || recent.sender_role === "coach") {
      setWaitingTime("");
      return;
    }
    const chatDate = new Date(time.replace(" ", "T"));
    chatDate.setHours(chatDate.getHours() + 9);

    const nowDate = new Date(moment());
    nowDate.setHours(nowDate.getHours() + 9);

    const waitTime = (nowDate.getTime() - chatDate.getTime()) / 1000;

    const waitHour = parseInt(waitTime / 3600);
    const waitMin = parseInt((waitTime - waitHour * 3600) / 60);
    const waitSec = parseInt(waitTime - waitHour * 3600 - waitMin * 60);
    
    setWaitingTime(waitHour + ":" + waitMin + ":" + waitSec);
  };

  const getRecentChat = (e) => {
    if (e.tag) {
      if (e.tag === "weight") {
        return "체중을 입력했습니다";
      } else if (
        e.tag === "breakfast" ||
        e.tag === "lunch" ||
        e.tag === "dinner" ||
        e.tag === "snack"
      ) {
        return "식단을 입력했습니다";
      } else if (e.tag === "chat" && e.body.text) {
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
        <Text>{getRecentChat(props.recentChat)}</Text>
        <Waiting>{waitingTime}</Waiting>
      </Bottom>
    </Card>
  );
};

export default RoomCard;
