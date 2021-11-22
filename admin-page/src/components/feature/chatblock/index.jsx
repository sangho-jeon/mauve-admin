import React from "react";
import { ChatBlockSection } from "./styled";
import ChatSection from "./chat";
import InfoSection from "./info";

const ChatBlock = (props) => {
  return (
    <ChatBlockSection>
      <ChatSection text={props.text} />
      <InfoSection />
    </ChatBlockSection>
  );
};

export default ChatBlock;
