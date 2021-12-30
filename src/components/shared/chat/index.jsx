import React from "react";
import { BubbleContainer, Bubble, Image, Time } from "./styled";
const ChatBox = (prop) => {
  if (prop.tag === "chat") {
    return (
      <BubbleContainer sender={prop.sender}>
        <Time>{prop.time}</Time>
        <Bubble sender={prop.sender}>{prop.text}</Bubble>
      </BubbleContainer>
    );
  } else {
    return (
      <BubbleContainer>
        <Time>{prop.time}</Time>
        <Bubble>
          <a href={prop.src} target="blank">
            <Image src={prop.src}></Image>
          </a>
        </Bubble>
      </BubbleContainer>
    );
  }
};

export default ChatBox;
