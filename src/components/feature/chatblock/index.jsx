import React from "react";
import { ChatBlockSection } from "./styled";
import ChatSection from "./chat";
import InfoSection from "./info";

const ChatBlock = (props) => {
  //이 부분에서 socket이랑 연결한 후에 prop으로 소켓을 넘겨줘야 리렌더링이 발생하지 않는다.

  return (
    <ChatBlockSection>
      <ChatSection id={props.id} />
      <InfoSection />
    </ChatBlockSection>
  );
};

export default ChatBlock;
