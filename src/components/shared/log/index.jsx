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
      <a href={props.breakfastLocation} target="blank">
        <Breakfast src={showImage(props.breakfastThumbnail)}></Breakfast>
      </a>
      <a href={props.lunchLocation} target="blank">
        <Lunch src={showImage(props.lunchThumbnail)}></Lunch>
      </a>
      <a href={props.dinnerLocation} target="blank">
        <Dinner src={showImage(props.dinnerThumbnail)}></Dinner>
      </a>
      <a href={props.snackLocation} target="blank">
       <Snack src={showImage(props.snackThumbnail)}></Snack>
      </a>
    </MainContainer>
  );      
};

export default Log;