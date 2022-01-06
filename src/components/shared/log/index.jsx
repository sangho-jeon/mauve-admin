import React from "react";
import { MainContainer, Date, Weight, MorningWeight, NightWeight, Breakfast, Lunch, Dinner, Snack } from "./styled";

const Log = (props) => {  
  
  const showImage = (image) => {
    if (!image) {
      return "https://cdn4.iconfinder.com/data/icons/summer-and-holidays-24/60/fork__spoon__utensils__kitchen__restaurant-512.png";
    } else {
      return image;
    }
  };
  return (
    <MainContainer>
      <Date>{props.date}</Date>
      <Weight>
      <MorningWeight>{props.morning}</MorningWeight>
      <NightWeight>{props.night}</NightWeight>
      </Weight>
      <Breakfast src={showImage(props.breakfast)}></Breakfast>
      <Lunch src={showImage(props.lunch)}></Lunch>
      <Dinner src={showImage(props.dinner)}></Dinner>
      <Snack src={showImage(props.snack)}></Snack>
    </MainContainer>
  );      
};

export default Log;