import React from "react";
import { MainContainer, Date, Weight, Time, WeightTime, WeightData, Diet, DietTime, DietImage } from "./styled";

const Log = (props) => {  
  
  const showImage = (image) => {
    if (!image) {
      return "https://www.haceonline.org/wp-content/uploads/2017/08/light-gray-solid-color-background.jpg";
    } else {
      return image;
    }
  };
  return (
    <MainContainer>
      <Date>{props.date}</Date>
      <Time>
        <WeightTime>{props.morningTime}</WeightTime>
        <WeightTime>{props.nightTime}</WeightTime>
      </Time>
      <Weight>
        <WeightData>{props.morning}</WeightData>
        <WeightData>{props.night}</WeightData>
      </Weight>
      <Diet>
        <a href={props.breakfastLocation} target="blank">
          <DietImage src={showImage(props.breakfastThumbnail)}></DietImage>
        </a>
        <DietTime>{props.breakfastTime}</DietTime>
      </Diet>
      <Diet>
        <a href={props.lunchLocation} target="blank">
          <DietImage src={showImage(props.lunchThumbnail)}></DietImage>
        </a>
        <DietTime>{props.lunchTime}</DietTime>
      </Diet>
      <Diet>
        <a href={props.dinnerLocation} target="blank">
          <DietImage src={showImage(props.dinnerThumbnail)}></DietImage>
        </a>
        <DietTime>{props.dinnerTime}</DietTime>
      </Diet>
      <Diet>
        <a href={props.snackLocation} target="blank">
        <DietImage src={showImage(props.snackThumbnail)}></DietImage>
        </a>
        <DietTime>{props.snackTime}</DietTime>
      </Diet>
    </MainContainer>
  );      
};

export default Log;