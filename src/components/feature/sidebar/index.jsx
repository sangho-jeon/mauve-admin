import React from "react";
import { MainContainer, CardContainer, Header } from "./styled";
import RoomCard from "../../shared/room-card";
import dummy from "./dummy.json";

const SideBar = (props) => {
  return (
    <MainContainer>
      <Header>회원 리스트</Header>
      <CardContainer>
      {dummy.body.room.map((room) => (
        <RoomCard
          click={props.click}
          id={room._id}
          name={room.user.name}
          count={room.non_read_chats_num}
        ></RoomCard>
      ))}
      </CardContainer>
    </MainContainer>
  );
};

export default SideBar;
