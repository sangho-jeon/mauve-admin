import React from "react";
import { BubbleContainer, Bubble } from "./styled";
const ChatBox = (prop) => {
  if (prop.tag === "chat") {
    return (
      <BubbleContainer sender={prop.sender}>
        <Bubble sender={prop.sender}>{prop.text}</Bubble>
      </BubbleContainer>
    );
  } else if (prop.tag === "weight") {
    return (
      <BubbleContainer sender={prop.sender}>
        <Bubble sender={prop.sender}>
          {prop.weight.time}: {prop.weight.kilograms}kg
        </Bubble>
      </BubbleContainer>
    );
  } else {
    return (
      <BubbleContainer>
        <Bubble>
          <a href={prop.src} target="blank">
            <img src={prop.src} width="200" height="200"></img>
          </a>
        </Bubble>
      </BubbleContainer>
    );
  }
};

export default ChatBox;
