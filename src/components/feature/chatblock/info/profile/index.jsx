import React, { useEffect, useState } from "react";
import { Profile, Information, Item, Tag } from "./styled";
import Calendar from "./calendar/calendar";
import InfoService from "../../../../../apis/info/info-service";

const infoService = new InfoService();

const ProfileSection = (prop) => {
	const [profile, setProfile] = useState([]);

	const getProfileData = async () => {
    try {
      const { log } = await infoService.getUserInfo(prop.id);
      setProfile(log);
      console.log(log);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProfileData();
  }, [prop.id]);

	const getNumber = (e) => {
		if (e) {
			var number = e.replace(/([0-9]{3})([0-9]+)([0-9]{4})/,"$1-$2-$3");
			return number;
		}
	};

	const getDay = (e) => {
		if (e === 0) {
			return "Day";
		}
		return e;
	};

	const isData = (e, taddddg) => {
		if (JSON.stringify(e) === "[]") {
			return "";
		} else {
			return e.body.userInfo;
		}
  };
	
	return (
		<Profile>
		<Information>
		<Item><Tag>이름:</Tag>{isData(profile).name}</Item>
		<Item><Tag>번호:</Tag>{getNumber(isData(profile).phone_NO)}</Item>
		<Item><Tag>나이:</Tag>{isData(profile).age}세</Item>
		<Item><Tag>신장:</Tag>{isData(profile).height}cm</Item>
		<Item><Tag>체중:</Tag>{isData(profile).weight}kg</Item>
		<Item><Tag>결제:</Tag>D-{getDay(isData(profile).next_payment_d_day)}</Item>
		</Information>
		<Calendar data={profile} />
		</Profile>
	);
};

export default ProfileSection;