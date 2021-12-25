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
            morning={room.morning_weight ? true : false}
            night={room.night_weight ? true : false}
            breakfast={room.breakfast ? true : false}
            lunch={room.lunch ? true : false}
            dinner={room.dinner ? true : false}
          ></RoomCard>
        ))}
      </CardContainer>
    </MainContainer>
  );
};

export default SideBar;
