import React, { useEffect, useState, useRef, useContext } from "react";
import {
  ChatContainer,
  ChatInput,
  ChatInputContainer,
  Chatlayout,
  ImageIcon,
  ChatRoomTitle,
  UserName,
  Button,
} from "./styled";
import ChatBox from "../../../shared/chat";
import ChatService from "../../../../apis/chats/chat-servcie";
import RoomService from "../../../../apis/rooms/room-service";
import Modal from "../info/profile/questionnaire/index";
import { Context } from "../../../../utils/contextProvider";

const chatService = new ChatService();
const roomService = new RoomService();

const ChatSection = ({ id, userId, socket }) => {
  const { value, contextDispatch } = useContext(Context);

  const messagesRef = useRef(null);

  const [inputMessage, setInputMessage] = useState(""); //textarea에 입력되는 데이터를 저장하는 state

  // 여기 두가지 상태 값이 있는데
  // 하나는 기존의 채팅 내용을 담아두고 UI와 직접 연결되는 상태값이다
  const [chatMonitor, setChatMonitor] = useState([]);

  // 나머지 하나는 서버에서 받은 갱신된(새로 추가된) 내용을 받는 상태값이다.
  const [recentChat, setRecentChat] = useState();

  const [room, setRoom] = useState("");

  //////////////// 문진표 모달
  const [showModal, setShowModal] = useState(false);

  const buttonClick = (e) => {
    if (e !== "") {
      setShowModal(true);
    }
  };
  /////////////////////여기까지 문진표

  useEffect(() => {
    // 각 룸 페이지에 들어갈때
    getChat();
  }, [id]);

  useEffect(() => {
    socket.on("chat", (data) => {
      console.log("chat 들어온다");
      console.log(data);
      setRecentChat(data);
      updateChat(data);
    });
  }, []);

  useEffect(() => {
    recentChat !== undefined && setChatMonitor([...chatMonitor, recentChat]);
    setRecentChat(undefined);
  }, [recentChat]);

  useEffect(() => {
    getRoomById();
  }, [id]);

  const getRoomById = async () => {
    try {
      const { room } = await roomService.getRoomById(
        id,
        value.accessToken,
        value.refreshToken
      );
      setRoom(room);
    } catch (error) {
      console.log(error);
    }
  };

  const getChat = async () => {
    //초기 기존 채팅 받아오는 부분.
    try {
      const { chat } = await chatService.getChatByRoomId(
        id,
        value.accessToken,
        value.refreshToken
      );
      setChatMonitor(chat.reverse());
      console.log(chatMonitor);
      console.log(socket);
    } catch (error) {
      console.log(error);
    }
  };

  const sendChat = async (text) => {
    try {
      const { chat } = await chatService.postChat(
        id,
        text,
        value.accessToken,
        value.refreshToken
      );
    } catch (error) {
      console.log(error);
    }
  };

  const updateChat = (data) => {
    recentChat !== undefined && setChatMonitor([...chatMonitor, recentChat]);
    console.log(chatMonitor);
    setRecentChat(null);
  };

  const fileClear = useRef();

  ///////////////////////////////// 인풋 처리 부분
  const handleInput = (e) => {
    setInputMessage(e.target.value);
  };

  const handleImage = async (e) => {
    console.log("image");
    const formData = new FormData();
    formData.append("media_file", e.target.files[0]);
    try {
      await chatService.postMedia(
        id,
        formData,
        value.accessToken,
        value.refreshToken
      );
    } catch (error) {
      console.log(error);
    }
  };

  const handleEnter = (e) => {
    if (e.key === "Enter" && inputMessage !== "\n") {
      if (!e.shiftKey) {
        sendChat(inputMessage.replace(/\s+$/, ""));
        setInputMessage("");
      }
    } else if (e.key === "Enter" && inputMessage === "\n") {
      setInputMessage("");
    }
  };

  // 채팅 자동 스크롤 적용
  useEffect(() => {
    messagesRef.current.scrollTop = messagesRef.current.scrollHeight;
  }, [chatMonitor]);

  const isData = (e) => {
    if (e === "") {
      return false;
    } else {
      return true;
    }
  };

  return (
    <Chatlayout>
      <ChatRoomTitle>
        <UserName>{isData(room) && room.user.name}</UserName>
        <Button onClick={() => buttonClick(userId)}>문진표</Button>
        <Modal
          showModal={showModal}
          click={() => setShowModal(false)}
          id={userId}
        ></Modal>
      </ChatRoomTitle>
      <ChatContainer ref={messagesRef}>
        {chatMonitor.map(
          (chats) =>
            chats.body && (
              <ChatBox
                tag={chats.tag}
                text={chats.body.text}
                src={chats.body.location}
                thumbnail={chats.body.thumbnail + "&w=250&h=250"}
                weight={chats.body}
                time={chats.created_at_time}
                date={chats.created_at_date}
                sender={value.id === chats.sender._id ? true : false}
              />
            )
        )}
      </ChatContainer>
      <ChatInputContainer>
        <ChatInput
          type="textarea"
          cols="40"
          rows="5"
          placeholder="내용을 입력해주세요"
          onChange={handleInput}
          onKeyUp={handleEnter}
          value={inputMessage}
        ></ChatInput>
        <div>
          <label for="file-input">
            <ImageIcon />
          </label>
          <input
            type="file"
            id="file-input"
            accept="image/*"
            onChange={handleImage}
            ref={fileClear}
            style={{ display: "none" }}
          />
        </div>
      </ChatInputContainer>
    </Chatlayout>
  );
};

export default ChatSection;
