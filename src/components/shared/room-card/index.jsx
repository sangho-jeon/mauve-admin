import React from "react";
import { Card, Name, Text, Count, Waiting, Left, Right } from "./styled";

const RoomCard = (props) => {
  return (
    <Card onClick={props.click} value={props.id}>
      <Left>
        <Name>{props.name}</Name>
        <Text>{props.text}</Text>
      </Left>
      <Right>
        <Count>{props.count}</Count>
        <Waiting>{props.wait}</Waiting>
      </Right>
    </Card>
  );
};

export default RoomCard;
