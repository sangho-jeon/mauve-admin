import React from "react";
import { ChatContainer } from "./styled";
import ChatBox from "../../../shared/chat";
const ChatSection = (props) => {
  return (
    <ChatContainer>
      chatSection {props.text} <ChatBox />
      <ChatBox />
      <ChatBox />
      <ChatBox />
      <ChatBox />
    </ChatContainer>
  );
};

export default ChatSection;
