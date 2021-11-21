import React from "react";
import ChatBlock from "../components/feature/chatblock";
import SideBar from "../components/feature/sidebar";
import { MainLayOut } from "../components/layout/styled";
const MainPage = () => {
  return (
    <MainLayOut>
      <SideBar />
      <ChatBlock />
    </MainLayOut>
  );
};

export default MainPage;
