import React from "react";
import { Card, Name, Text, Count, Waiting, Left, Right, Top, Bottom, Weight, Diet } from "./styled";

const RoomCard = (props) => {
  return (
    <Card onClick={props.click} value={props.id}>
      <Top>
        <Left>
          <Name>{props.name}</Name>
          <Count>{props.count}</Count>
        </Left>
        <Right>
          체중
          <Weight/>
          <Weight/>    
          식단
          <Diet/>
          <Diet/>
          <Diet/>
        </Right>
      </Top>
      <Bottom>
        <Text>텍스트텍스트스트텍스트스트텍스트트텍스트스트텍스트트텍스트텍스트{props.text}</Text>
        <Waiting>13:38{props.wait}</Waiting>
      </Bottom>
    </Card>
  );
};

export default RoomCard;
