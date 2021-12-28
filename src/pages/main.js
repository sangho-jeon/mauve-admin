import React, { useState } from "react";
import RoomService from "../apis/rooms/room-service";
import ChatBlock from "../components/feature/chatblock";
import SideBar from "../components/feature/sidebar";
import { MainLayOut } from "../components/layout/styled";

const roomService = new RoomService();

const MainPage = () => {
  const [id, setId] = useState("");
  const [userId, setUserId] = useState("");

  const OnClick = (id, userId) => {
    setId(id);
    setUserId(userId);
  };

  ////////////////////////////////////////////////////////

  return (
    <MainLayOut>
      <SideBar click={OnClick} />
      <ChatBlock id={id} userId={userId} />
    </MainLayOut>
  );
};

export default MainPage;
