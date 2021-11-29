import React from "react";
import { Profile, Information, Item, Tag } from "./styled";
import Calendar from "./calendar/calendar";

const ProfileSection = () => {
	return (
		<Profile>
		<Information>
		<Item><Tag>이름:</Tag></Item>
		<Item><Tag>번호:</Tag></Item>
		<Item><Tag>나이:</Tag></Item>
		<Item><Tag>신장:</Tag></Item>
		<Item><Tag>체중:</Tag></Item>
		<Item><Tag>결제 남은 일수:</Tag></Item>
		</Information>
		<Calendar />
		</Profile>
	);
};

export default ProfileSection;