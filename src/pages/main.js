import React, { useState } from "react";
import ChatBlock from "../components/feature/chatblock";
import SideBar from "../components/feature/sidebar";
import { MainLayOut } from "../components/layout/styled";
const MainPage = () => {
  const [id, setId] = useState("");

  const OnClick = (e) => {
    setId(e.target.value);
  };

  return (
    <MainLayOut>
      <SideBar click={OnClick} />
      <ChatBlock text={id} />
    </MainLayOut>
  );
};

export default MainPage;
