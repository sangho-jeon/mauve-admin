import React from "react";
import { Card, Name, Text, Count, Waiting, Left, Right, Top, Bottom, Weight, Diet } from "./styled";

const RoomCard = (props) => {
  return (
    <Card onClick={() => {props.click(props.id, props.userId)}}>
      <Top>
        <Left>
          <Name>{props.name}</Name>
          <Count>{props.count}</Count>
        </Left>
        <Right>
          체중
          <Weight sender={props.morning} />
          <Weight sender={props.night} />    
          식단
          <Diet sender={props.breakfast} />
          <Diet sender={props.lunch} />
          <Diet sender={props.dinner} />
        </Right>
      </Top>
      <Bottom>
        <Text>{props.text}</Text>
        <Waiting>{props.wait}</Waiting>
      </Bottom>
    </Card>
  );
};

export default RoomCard;
