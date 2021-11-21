import React from "react";
import { MainContainer, Header } from "./styled";
import RoomCard from "../../shared/room-card";
const SideBar = () => {
  return (
    <MainContainer>
      <Header>sidebar</Header>

      <RoomCard />
      <RoomCard />
      <RoomCard />
      <RoomCard />
    </MainContainer>
  );
};

export default SideBar;
