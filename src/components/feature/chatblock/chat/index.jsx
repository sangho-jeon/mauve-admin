import React, { useEffect, useState } from "react";
import { ChatContainer, ChatInput, Chatlayout } from "./styled";
import ChatBox from "../../../shared/chat";
import ChatService from "../../../../apis/chats/chat-servcie";
import { coachInfo } from "../../../../utils/coachInfo";
import { initiateSocket } from "../../../../utils/socket";

const chatService = new ChatService();

const ChatSection = ({ id, socket }) => {
  const myId = coachInfo.myId;
  const [inputMessage, setInputMessage] = useState(""); //textarea에 입력되는 데이터를 저장하는 state

  // 여기 두가지 상태 값이 있는데
  // 하나는 기존의 채팅 내용을 담아두고 UI와 직접 연결되는 상태값이다
  const [chatMonitor, setChatMonitor] = useState([]);

  // 나머지 하나는 서버에서 받은 갱신된(새로 추가된) 내용을 받는 상태값이다.
  const [recentChat, setRecentChat] = useState();

  const getChat = async () => {
    //초기 기존 채팅 받아오는 부분.
    try {
      const { chat } = await chatService.getChatByRoomId(id);
      socket.emit("join", id);
      setChatMonitor(chat.reverse());
      console.log(chatMonitor);
      console.log(socket);
    } catch (error) {
      console.log(error);
    }
  };

  const sendChat = async (text) => {
    try {
      const { chat } = await chatService.postChat(id, text);
      setChatMonitor([...chatMonitor, chat]);
      setInputMessage("");
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    // 각 룸 페이지에 들어갈때
    getChat();
  }, [id]);

  useEffect(() => {
    if (socket) {
      socket.on("chat", (data) => {
        console.log("chat 들어온다~~~~~" + JSON.stringify(data));
        setRecentChat(data);
        updateChat(data);
      });
    }
  }, []);

  const updateChat = (data) => {
    recentChat !== undefined && setChatMonitor([...chatMonitor, recentChat]);
    console.log(chatMonitor);
    setRecentChat(null);
  };

  // useEffect(() => {
  //   recentChat !== undefined && setChatMonitor([...chatMonitor, recentChat]);
  //   setRecentChat(undefined);
  // }, [recentChat]);

  ///////////////////////////////// 인풋 처리 부분
  const handleInput = (e) => {
    setInputMessage(e.target.value);
  };

  const handleEnter = (e) => {
    if (e.key === "Enter" && inputMessage !== "\n") {
      // console.log(buildChat(inputMessage));
      sendChat(inputMessage);
    } else if (e.key === "Enter" && inputMessage === "\n") {
      setInputMessage("");
    }
  };

  return (
    <Chatlayout>
      <ChatContainer>
        chatSection {myId}
        {chatMonitor.map(
          (chats) =>
            chats.tag === "chat" &&
            chats.body && (
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
