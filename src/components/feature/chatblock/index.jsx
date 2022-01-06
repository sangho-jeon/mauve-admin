import React, { useState, useEffect } from "react";
import { ChatBlockSection } from "./styled";
import ChatSection from "./chat";
import InfoSection from "./info";
import io from "socket.io-client";
import { coachInfo } from "../../../utils/coachInfo";

// const socket = io.connect(
//   "localhost:3030/chat?roomId=6188e48a9c10dd00179b767f",
//   { transports: ["websocket"] }
// );
const ChatBlock = ({ id, userId, currentsocket }) => {
  // const [currentsocket, setSocket] = useState();
  // //이 부분에서 socket이랑 연결한 후에 prop으로 소켓을 넘겨줘야 리렌더링이 발생하지 않는다.
  // useEffect(() => {
  //   async function socketConnection() {
  //     const socket = await io("https://api-test.mauve.care/chat", {
  //       transports: ["websocket"],

  //       auth: {
  //         authorization: `Bearer ${coachInfo.accessToken}`,
  //         Refresh: `${coachInfo.refreshToken}`,
  //       },
  //     });
  //     socket.connect();
  //     setSocket(socket);
  //   }
  //   socketConnection();
  // }, []);
  return (
    <div>
      {currentsocket ? (
        <ChatBlockSection>
          <ChatSection id={id} socket={currentsocket} />
          <InfoSection id={userId} />
        </ChatBlockSection>
      ) : (
        <div>loading</div>
      )}
    </div>
  );
};

export default ChatBlock;
