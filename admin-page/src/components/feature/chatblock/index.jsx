import React from "react";
import { ChatBlockSection } from "./styled";
import ChatSection from "./chat";
import InfoSection from "./info";

const ChatBlock = () => {
  return (
    <ChatBlockSection>
      <ChatSection />
      <InfoSection />
    </ChatBlockSection>
  );
};

export default ChatBlock;
