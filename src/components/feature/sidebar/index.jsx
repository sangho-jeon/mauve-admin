import React, { useState, useEffect } from "react";
import { MainContainer, CardContainer, Header, Refresh } from "./styled";
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

  const buttonClick = () => {
    getRoomData();
	};

  useEffect(() => {
    getRoomData();
  }, []);

  return (
    <MainContainer>
      <Header>회원 리스트<Refresh src={"https://cdn-icons-png.flaticon.com/512/93/93641.png"}  onClick={() => buttonClick()}></Refresh></Header>
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
            recentChat={room.recent_chat}
            userChatTime={room.recent_time_user_send_chat}
          ></RoomCard>
        ))}
      </CardContainer>
    </MainContainer>
  );
};

export default SideBar;
