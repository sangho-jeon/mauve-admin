import React from "react";
import { InfoContainer, Title } from "./styled";
import ProfileSection from "./profile";
import LogSection from "./log";
import NoteSection from "./note";
import { isPropsEqual } from "@fullcalendar/common";

const InfoSection = ({ id }) => {
  return (
    <InfoContainer>
      <Title>회원 정보</Title>
      <ProfileSection id={id} />
      <Title>회원 노트</Title>
      <NoteSection id={id} />
      <Title>식단</Title>
      <LogSection id={id} />
    </InfoContainer>
  );
};

export default InfoSection;
