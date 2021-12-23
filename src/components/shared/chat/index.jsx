import React from "react";
import { BubbleContainer, Bubble } from "./styled";
const ChatBox = (prop) => {
  if (prop.tag === "chat") {
    return (
      <BubbleContainer sender={prop.sender}>
        <Bubble sender={prop.sender}>{prop.text}</Bubble>
      </BubbleContainer>
    );
  } else {
    return (
      <BubbleContainer>
        <Bubble>
          <img src={prop.src} width="200" height="200"></img>
        </Bubble>
      </BubbleContainer>
    );
  }
};

export default ChatBox;
