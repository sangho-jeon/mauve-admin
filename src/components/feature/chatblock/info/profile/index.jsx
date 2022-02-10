import React, { useEffect, useState, useContext } from "react";
import { Profile, Information, Item, Tag } from "./styled";
import Calendar from "./calendar/calendar";
import InfoService from "../../../../../apis/info/info-service";
import { Context } from "../../../../../utils/contextProvider";

const infoService = new InfoService();

const ProfileSection = (prop) => {
  const [profile, setProfile] = useState([]);
  const { value, contextDispatch } = useContext(Context);

  const getProfileData = async () => {
    try {
      const { profile } = await infoService.getUserInfo(
        prop.id,
        value.accessToken,
        value.refreshToken
      );
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
      var number = e.replace(/([0-9]{3})([0-9]+)([0-9]{4})/, "$1-$2-$3");
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
  };

  return (
    <Profile>
      <Information>
        <Item>
          <Tag>이름</Tag>
          {isData(profile) && profile.userInfo.name}
        </Item>
        <Item>
          <Tag>번호</Tag>
          {isData(profile) && getNumber(profile.userInfo.phone_NO)}
        </Item>
        <Item>
          <Tag>생년월일</Tag>
          {isData(profile) && profile.userInfo.birthdate + " (만 " + profile.userInfo.age + "세)"}
        </Item>
        <Item>
          <Tag>신장</Tag>
          {isData(profile) && profile.userInfo.height + " cm"}
        </Item>
        <Item>
          <Tag>처음 체중</Tag>
          {isData(profile) && profile.userInfo.weight.now + " kg"}
        </Item>
        <Item>
          <Tag>목표 체중</Tag>
          {isData(profile) && profile.userInfo.weight.goal + " kg"}
        </Item>
        <Item>
          <Tag>현재 주기</Tag>
          {isData(profile) && profile.userInfo.currentPhase.phase_kor}
        </Item>
      </Information>
      <Calendar data={profile} />
    </Profile>
  );
};

export default ProfileSection;
