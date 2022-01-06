import React from "react";
import { BubbleContainer, Bubble, Image, Time } from "./styled";
const ChatBox = (prop) => {
  const getDate = (e) => {
    return e.substring(5, 7) + "/" + e.substring(8, 10);
  };

  if (prop.tag === "chat") {
    return (
      <BubbleContainer sender={prop.sender}>
        <Time>{getDate(prop.date) + " " + prop.time}</Time>
        <Bubble sender={prop.sender}>{prop.text}</Bubble>
      </BubbleContainer>
    );
  } else if (prop.tag === "weight") {
    return (
      <BubbleContainer sender={prop.sender}>
        <Time>{getDate(prop.date) + " " + prop.time}</Time>
        <Bubble sender={prop.sender}>
          {prop.weight.time}: {prop.weight.kilograms}kg
        </Bubble>
      </BubbleContainer>
    );
  } else {
    return (
      <BubbleContainer sender={prop.sender}>
        <Time>{getDate(prop.date) + " " + prop.time}</Time>
        <Bubble sender={prop.sender}>
          <a href={prop.src} target="blank">
            <Image src={prop.thumbnail}></Image>
          </a>
        </Bubble>
      </BubbleContainer>
    );
  }
};

export default ChatBox;
