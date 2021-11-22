import React from "react";
import { Card } from "./styled";

const RoomCard = (props) => {
  return (
    <Card onClick={props.click} value={props.value}>
      {props.value}
    </Card>
  );
};

export default RoomCard;
