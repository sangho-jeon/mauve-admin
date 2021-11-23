import React from "react";
import { BubbleContainer, Bubble } from "./styled";
const ChatBox = (prop) => {
  return (
    <BubbleContainer sender={prop.sender}>
      <Bubble sender={prop.sender}>{prop.text}</Bubble>
    </BubbleContainer>
  );
};

export default ChatBox;
