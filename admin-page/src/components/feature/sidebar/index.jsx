import React from "react";
import { MainContainer, Header } from "./styled";
import RoomCard from "../../shared/room-card";
const SideBar = (props) => {
  return (
    <MainContainer>
      <Header>sidebar</Header>

      <RoomCard click={props.click} value="first" />
      <RoomCard click={props.click} value="second" />
      <RoomCard click={props.click} value="third" />
      <RoomCard click={props.click} value="fourth" />
    </MainContainer>
  );
};

export default SideBar;
