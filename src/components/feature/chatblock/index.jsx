import React, { useState, useEffect } from "react";
import { ChatBlockSection } from "./styled";
import ChatSection from "./chat";
import InfoSection from "./info";
import io from "socket.io-client";

const ChatBlock = ({ id, userId, currentsocket }) => {
  return (
    <div>
      {currentsocket ? (
        <ChatBlockSection>
          <ChatSection id={id} userId={userId} socket={currentsocket} />
          <InfoSection id={userId} />
        </ChatBlockSection>
      ) : (
        <div>loading</div>
      )}
    </div>
  );
};

export default ChatBlock;
