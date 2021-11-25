import React, { useEffect, useState } from "react";
import { ChatContainer, ChatInput, Chatlayout } from "./styled";
import ChatBox from "../../../shared/chat";
import dummy from "./dummy.json";

const ChatSection = (props) => {
  //prop으로 받은 socket을 이용해서 지난 chat을 받아와야 한다.
  //state를 두개를 이용해서 기존 chat과 신규 chat을 받아와서 update해야한다.

  const [inputMessage, setInputMessage] = useState("");

  // 여기 두가지 상태 값이 있는데
  // 하나는 기존의 채팅 내용을 담아두고 UI와 직접 연결되는 상태값이다
  const [chatMonitor, setChatMonitor] = useState([]);

  // 나머지 하나는 서버에서 받은 갱신된(새로 추가된) 내용을 받는 상태값이다.
  const [recentChat, setRecentChat] = useState("");

  useEffect(() => {
    setChatMonitor(dummy.body.chats["2021-11-18"]);
  }, [props]);

  const handleInput = (e) => {
    setInputMessage(e.target.value);
  };

  const handleEnter = (e) => {
    if (e.key === "Enter") {
      // console.log(buildChat(inputMessage));

      console.log(chatMonitor);
      console.log(inputMessage);
      buildChat(inputMessage);
    }
  };

  const buildChat = (input) => {
    const newChat = {
      _id: "61964dfcc72cbd376f814c37dd",
      tag: "chat",
      chat: input,
      sender: {
        _id: "6303e48a9c10dd00179b767f",
        name: "정지원",
        profile_img: {
          location: " ",
        },
      },
      created_at_date: "2021-11-18",
    };
    setChatMonitor([...chatMonitor, newChat]);
    setInputMessage("");
  };

  const myId = props.id;
  const chats = dummy.body.chats["2021-11-18"];
  return (
    <Chatlayout>
      <ChatContainer>
        chatSection {myId}
        {chatMonitor.map((chats) => (
          <ChatBox
            text={chats.chat}
            sender={myId === chats.sender._id ? true : false}
          />
        ))}
      </ChatContainer>
      <ChatInput
        type="text"
        placeholder="내용을 입력해주세요"
        onChange={handleInput}
        onKeyPress={handleEnter}
        value={inputMessage}
      ></ChatInput>
    </Chatlayout>
  );
};

export default ChatSection;
