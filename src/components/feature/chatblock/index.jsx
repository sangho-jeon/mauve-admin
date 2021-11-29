import React, { useState } from "react";
import { ChatBlockSection } from "./styled";
import ChatSection from "./chat";
import InfoSection from "./info";
import { useEffect } from "react/cjs/react.development";
import io from "socket.io-client";
import { coachInfo } from "../../../utils/coachInfo";

// const socket = io.connect(
//   "localhost:3030/chat?roomId=6188e48a9c10dd00179b767f",
//   { transports: ["websocket"] }
// );
const ChatBlock = (props) => {
  const [currentsocket, setSocket] = useState();
  //이 부분에서 socket이랑 연결한 후에 prop으로 소켓을 넘겨줘야 리렌더링이 발생하지 않는다.
  useEffect(() => {
    const socket = io(
      "http://36df-223-62-175-194.ngrok.io/chat?roomId=6188e48a9c10dd00179b767f",
      {
        transports: ["websocket"],
        auth: {
          authorization: `Bearer ${coachInfo.accessToken}`,
          Refresh: `${coachInfo.refreshToken}`,
        },
      }
    );
    setSocket(socket);
    console.log(currentsocket);
  }, []);
  return (
    <div>
      {currentsocket ? (
        <ChatBlockSection>
          <ChatSection id={props.id} socket={currentsocket} />
          <InfoSection />
        </ChatBlockSection>
      ) : (
        <div>loading</div>
      )}
    </div>
  );
};

export default ChatBlock;
