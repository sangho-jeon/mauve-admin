import React from "react";
import { ChatContainer, ChatInput, Chatlayout } from "./styled";
import ChatBox from "../../../shared/chat";
import dummy from "./dummy.json";

const ChatSection = (props) => {
  //prop으로 받은 socket을 이용해서 지난 chat을 받아와야 한다.
  //state를 두개를 이용해서 기존 chat과 신규 chat을 받아와서 update해야한다.
  const myId = props.id;
  const chats = dummy.body.chats["2021-11-18"];
  return (
    <Chatlayout>
      <ChatContainer>
        chatSection {myId}
        {chats.map((chats) => (
          <ChatBox
            key={chats._id}
            text={chats.chat}
            sender={myId === chats.sender._id ? true : false}
          />
        ))}
      </ChatContainer>
      <ChatInput type="text" placeholder="내용을 입력해주세요"></ChatInput>
    </Chatlayout>
  );
};

export default ChatSection;
