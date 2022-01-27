import React, { useState, useEffect, useContext, useRef } from "react";
import { MainContainer, CardContainer, Header, Refresh } from "./styled";
import RoomCard from "../../shared/room-card";
import RoomService from "../../../apis/rooms/room-service";
import { Context } from "../../../utils/contextProvider";

const roomService = new RoomService();

const useInterval = (callback, delay) => {
  const savedCallback = useRef();

  // Remember the latest callback.
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // Set up the interval.
  useEffect(() => {
    function tick() {
      savedCallback.current();
    }
    if (delay !== null) {
      let id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
};

const SideBar = (props) => {
  const [roomList, setRoomList] = useState([]);
  const { value, contextDispatch } = useContext(Context);

  useInterval(() => {
    getRoomData();
  }, 60000);

  const getRoomData = async () => {
    try {
      const { room } = await roomService.getAllRoom(
        value.accessToken,
        value.refreshToken
      );
      sortRoomList(room);
    } catch (error) {
      console.log(error);
    }
  };

  const sortRoomList = (list) => {
    list.sort(
      (a, b) => {
        if (!a.recent_chat || !b.recent_chat) {
          return 0;
        } else {
          return -a.recent_chat.created_at.localeCompare(b.recent_chat.created_at);
        }
      }
    );
    setRoomList(list);
  };

  const buttonClick = () => {
    getRoomData();
  };

  useEffect(() => {
    getRoomData();
  }, []);

  return (
    <MainContainer>
      <Header>
        회원목록
        <Refresh
          src={"https://cdn-icons-png.flaticon.com/512/93/93641.png"}
          onClick={() => buttonClick()}
        ></Refresh>
      </Header>
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
