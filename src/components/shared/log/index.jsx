import React from "react";
import { MainContainer, Date, Weight, MorningWeight, NightWeight, Breakfast, Lunch, Dinner, Snack } from "./styled";

const Log = (props) => {
  return (
    <MainContainer>
      <Date>{props.date}</Date>
      <Weight>
      <MorningWeight>{props.morning}</MorningWeight>
      <NightWeight>{props.night}</NightWeight>
      </Weight>
      <Breakfast src={props.breakfast}></Breakfast>
      <Lunch src={props.lunch}></Lunch>
      <Dinner src={props.dinner}></Dinner>
      <Snack src={props.snack}></Snack>
    </MainContainer>
  );      
};

export default Log;