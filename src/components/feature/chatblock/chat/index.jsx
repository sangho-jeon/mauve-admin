import React, { useEffect, useState } from "react";
import { ChatContainer, ChatInput, Chatlayout } from "./styled";
import ChatBox from "../../../shared/chat";
import ChatService from "../../../../apis/chats/chat-servcie";
import { coachInfo } from "../../../../utils/coachInfo";

const chatService = new ChatService();

const ChatSection = (props) => {
  const myId = coachInfo.myid;
  const [inputMessage, setInputMessage] = useState(""); //textarea에 입력되는 데이터를 저장하는 state

  // 여기 두가지 상태 값이 있는데
  // 하나는 기존의 채팅 내용을 담아두고 UI와 직접 연결되는 상태값이다
  const [chatMonitor, setChatMonitor] = useState([]);

  // 나머지 하나는 서버에서 받은 갱신된(새로 추가된) 내용을 받는 상태값이다.
  const [recentChat, setRecentChat] = useState("");

  const getChat = async () => {
    try {
      const { chat } = await chatService.getChatByRoomId(props.id);
      setChatMonitor(chat);
      console.log(chatMonitor);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getChat();
  }, [props]);

  // 인풋 처리 부분
  const handleInput = (e) => {
    setInputMessage(e.target.value);
  };

  const handleEnter = (e) => {
    if (e.key === "Enter" && inputMessage !== "\n") {
      // console.log(buildChat(inputMessage));
      buildChat(inputMessage);
    } else if (e.key === "Enter" && inputMessage === "\n") {
      setInputMessage("");
    }
  };

  const buildChat = (input) => {
    const newChat = {
      tag: "chat",
      body: { text: input },
      sender: {
        _id: myId,
        name: "정지원",
        profile_img: {
          location: " ",
        },
      },
    };
    setChatMonitor([...chatMonitor, newChat]);
    setInputMessage("");
  };

  return (
    <Chatlayout>
      <ChatContainer>
        chatSection {myId}
        {chatMonitor.map(
          (chats) =>
            chats.tag === "chat" && (
              <ChatBox
                text={chats.body.text}
                sender={myId === chats.sender._id ? true : false}
              />
            )
        )}
      </ChatContainer>
      <ChatInput
        type="textarea"
        cols="40"
        rows="5"
        placeholder="내용을 입력해주세요"
        onChange={handleInput}
        onKeyUp={handleEnter}
        value={inputMessage}
      ></ChatInput>
    </Chatlayout>
  );
};

export default ChatSection;
