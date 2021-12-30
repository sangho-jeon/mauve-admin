import React from "react";
import { BubbleContainer, Bubble, Image } from "./styled";
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
          <a href={prop.src} target="blank">
            <Image src={prop.src}></Image>
          </a>
        </Bubble>
      </BubbleContainer>
    );
  }
};

export default ChatBox;
