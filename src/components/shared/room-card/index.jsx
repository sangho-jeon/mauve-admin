import React, { useState, useEffect, useRef } from "react";
import {
  Card,
  Name,
  Text,
  Count,
  Waiting,
  Top,
  Bottom,
  Weight,
  Diet,
  WeightMark,
  DietMark,
  Mark,
  First,
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
    if (!recent || recent.sender_role === "coach") {
      setWaitingTime("");
      return;
    } 
    const chatDate = new Date(time.replace(" ", "T"));
    chatDate.setHours(chatDate.getHours() + 9);

    const nowDate = new Date(moment());
    nowDate.setHours(nowDate.getHours() + 9);

    const waitTime = (nowDate.getTime() - chatDate.getTime()) / 1000;

    const refineTime = (time) => {
      if (time.toString().length === 1) {
        return "0" + time;
      } else {
        return time;
      }
    }

    const waitHour = parseInt(waitTime / 3600);
    const waitMin = parseInt((waitTime - waitHour * 3600) / 60);
    const waitSec = parseInt(waitTime - waitHour * 3600 - waitMin * 60);
    
    setWaitingTime(refineTime(waitHour) + ":" + refineTime(waitMin) + ":" + refineTime(waitSec));
  };

  const getRecentChat = (e) => {
    if (e) {
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
      } else if (e.tag === "picture") {
        return "사진";
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
        <First>
          <Name>{props.name}</Name>
          <Count count={props.count}>{props.count}</Count>
        </First>
        <Text>{getRecentChat(props.recentChat)}</Text>
      </Top>
      <Bottom>
        <Mark>
          <WeightMark>
            <Weight sender={props.morning} />
            <Weight sender={props.night} />
          </WeightMark>
          <DietMark>
            <Diet sender={props.breakfast} />
            <Diet sender={props.lunch} />
            <Diet sender={props.dinner} />
          </DietMark>
        </Mark>
        <Waiting>{waitingTime}</Waiting>
      </Bottom>
    </Card>
  );
};

export default RoomCard;
