import React, { useState, useEffect, useContext } from "react";
import RoomService from "../apis/rooms/room-service";
import ChatBlock from "../components/feature/chatblock";
import SideBar from "../components/feature/sidebar";
import { MainLayOut } from "../components/layout/styled";
import io from "socket.io-client";
import { Context } from "../utils/contextProvider";

const roomService = new RoomService();

const MainPage = ({ auth }) => {
  const { value, contextDispatch } = useContext(Context);
  const [currentId, setId] = useState(""); // 클릭된 id 값
  const [userId, setUserId] = useState(""); // 나의 id 값
  const [currentsocket, setSocket] = useState();
  //이 부분에서 socket이랑 연결한 후에 prop으로 소켓을 넘겨줘야 리렌더링이 발생하지 않는다.
  useEffect(() => {
    async function socketConnection() {
      const socket = await io("https://api-test.mauve.care/chat", {
        transports: ["websocket"],

        auth: {
          authorization: `Bearer ${value.accessToken}`,
          Refresh: `${value.refreshToken}`,
        },
      });
      socket.connect();
      setSocket(socket);
    }
    socketConnection();
  }, []);

  const OnClick = (id, userId) => {
    try {
      currentsocket.emit("room-leave", { roomId: currentId }, (error) => {
        if (error) {
          console.log(error);
        }
      });
      console.log("exited" + currentId);
    } catch (error) {
      console.log(error);
    }
    setId(id);
    setUserId(userId);
    try {
      currentsocket.emit("room-join", { roomId: id }, (error) => {
        if (error) {
          console.log(error);
        }
      });
      console.log("joined" + id);
    } catch (error) {
      console.log(error);
    }
  };

  ////////////////////////////////////////////////////////

  return (
    <MainLayOut>
      <SideBar click={OnClick} currentId={currentId} />
      <ChatBlock id={currentId} userId={userId} currentsocket={currentsocket} />
    </MainLayOut>
  );
};

export default MainPage;
