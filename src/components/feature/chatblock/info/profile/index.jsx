import React from "react";
import { Profile, Information, Item, Tag } from "./styled";
import Calendar from "./calendar/calendar";
import dummy from "./dummy.json";

const ProfileSection = () => {

	const getNumber = (e) => {
		var number = e.replace(/([0-9]{3})([0-9]+)([0-9]{4})/,"$1-$2-$3");
		return number;
	};

	const getDay = (e) => {
		if (e === 0) {
			return "Day";
		}
		return e;
	};
	
	return (
		<Profile>
		<Information>
		<Item><Tag>이름:</Tag>{dummy.body.userInfo.name}</Item>
		<Item><Tag>번호:</Tag>{getNumber(dummy.body.userInfo.phone_NO)}</Item>
		<Item><Tag>나이:</Tag>{dummy.body.userInfo.age}세</Item>
		<Item><Tag>신장:</Tag>{dummy.body.userInfo.height}cm</Item>
		<Item><Tag>체중:</Tag>{dummy.body.userInfo.weight}kg</Item>
		<Item><Tag>결제 남은 일수:</Tag>D-{getDay(dummy.body.userInfo.next_payment_d_day)}</Item>
		</Information>
		<Calendar />
		</Profile>
	);
};

export default ProfileSection;