import React from "react";
import { MainContainer, Header } from "./styled";
import RoomCard from "../../shared/room-card";
import dummy from "./dummy.json";

const SideBar = (props) => {
  return (
    <MainContainer>
      <Header>Chat List</Header>
      {dummy.body.room.map((room) => (
        <RoomCard
          key={room._id}
          name={room.user.name}
          count={room.non_read_chats_num}
        ></RoomCard>
      ))}

      <RoomCard
        click={props.click}
        value="first"
        name="paul"
        text="dldldlsdcsdc"
        count="5"
        wait="2021-11-17"
      />
    </MainContainer>
  );
};

export default SideBar;
