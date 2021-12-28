import React, { useState, useEffect } from "react";
import { MainContainer, CardContainer, Header } from "./styled";
import RoomCard from "../../shared/room-card";
import RoomService from "../../../apis/rooms/room-service";

const roomService = new RoomService();

const SideBar = (props) => {
  const [roomList, setRoomList] = useState([]);

  const getRoomData = async () => {
    try {
      const { room } = await roomService.getAllRoom();
      setRoomList(room);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getRoomData();
  }, []);

  const getRecentChat = (e) => {
    console.log(e);
    if (e.tag && e.tag === "weight") {
      return "체중을 입력했습니다";
    } else if (e.tag && e.tag === "breakfast" || e.tag === "lunch" || e.tag === "dinner") {
      return "식단을 입력했습니다";
    } else if (e.tag && e.tag === "chat") {
      return e.body.text;
    }
    return "";
  }

  return (
    <MainContainer>
      <Header>회원 리스트</Header>
      <CardContainer>
        {roomList.map((room) => (
          <RoomCard
            click={props.click}
            id={room._id}
            userId={room.user._id}
            name={room.user.name}
            count={room.non_read_chats_num}
            morning={room.input_morning_weight}
            night={room.input_night_weight}
            breakfast={room.input_breakfast}
            lunch={room.input_lunch}
            dinner={room.input_dinner}
            text={getRecentChat(room.recent_non_read_chats)}
          ></RoomCard>
        ))}
      </CardContainer>
    </MainContainer>
  );
};

export default SideBar;
