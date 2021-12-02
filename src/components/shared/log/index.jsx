import React from "react";
import { MainContainer, Date, Weight, MorningWeight, NightWeight, Breakfast, Lunch, Dinner, Snack } from "./styled";

const Log = () => {
  return (
    <MainContainer>
      <Date>21.12.02</Date>
      <Weight>
      <MorningWeight>73.2kg</MorningWeight>
      <NightWeight>73.5kg</NightWeight>
      </Weight>
      <Breakfast src="https://wecan-app.s3.ap-northeast-2.amazonaws.com/chat/media_file/dinner/163817860095013.jpg"></Breakfast>
      <Lunch src="https://wecan-app.s3.ap-northeast-2.amazonaws.com/chat/media_file/breakfast/1637149933756test.JPG"></Lunch>
      <Dinner src="https://wecan-app.s3.ap-northeast-2.amazonaws.com/chat/media_file/dinner/1637914905110061beae04bf13fac9d31593a29291a5e.jpeg"></Dinner>
      <Snack></Snack>
    </MainContainer>
  );      
};

export default Log;