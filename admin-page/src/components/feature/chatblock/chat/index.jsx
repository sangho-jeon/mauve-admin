import React from "react";
import { ChatContainer, ChatHolder } from "./styled";
import ChatBox from "../../../shared/chat";
const ChatSection = (props) => {
  return (
    <ChatContainer>
      chatSection {props.id}
      {console.log(props.id)}
      <ChatBox text="아무거나" sender={true} />
      <ChatBox text="일단 쳐보고" sender={false} />
      <ChatBox text="english도" sender={true} />
      <ChatBox text="쳐보고" />
    </ChatContainer>
  );
};

export default ChatSection;
