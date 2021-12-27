import React, { useEffect, useState } from "react";
import { Profile, Information, Item, Tag } from "./styled";
import Calendar from "./calendar/calendar";
import InfoService from "../../../../../apis/info/info-service";
import dummy from './dummy.json';

const infoService = new InfoService();

const ProfileSection = (prop) => {
	const [profile, setProfile] = useState([]);

	const getProfileData = async () => {
    try {
      const { profile } = await infoService.getUserInfo(prop.id);
      setProfile(profile);
      console.log(profile);
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
	
	const isData = (e) => {
    if (JSON.stringify(e) === "[]") {
      return false;
    } else {
      return true;
    }
  }

	return (
		<Profile>
		<Information>
		<Item><Tag>이름:</Tag>{isData(profile) && profile.userInfo.name}</Item>
		<Item><Tag>번호:</Tag>{isData(profile) && getNumber(profile.userInfo.phone_NO)}</Item>
		<Item><Tag>나이:</Tag>{isData(profile) && profile.userInfo.age + "세"}</Item>
		<Item><Tag>신장:</Tag>{isData(profile) && profile.userInfo.height + "cm"}</Item>
		<Item><Tag>체중:</Tag>{isData(profile) && profile.userInfo.weight + "kg"}</Item>
		<Item><Tag>결제:</Tag>{isData(profile) && "D-" + getDay(profile.userInfo.next_payment_d_day)}</Item>
		</Information>
		<Calendar data={profile} />
		</Profile>
	);
};

export default ProfileSection;