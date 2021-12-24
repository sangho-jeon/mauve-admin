import React from "react";
import { InfoContainer } from "./styled";
import ProfileSection from "./profile";
import LogSection from "./log";
import NoteSection from "./note";
import { isPropsEqual } from "@fullcalendar/common";

const InfoSection = ({ id }) => {
  return (
    <InfoContainer>
      <ProfileSection id={id} />
      <LogSection id={id} />
      <NoteSection />
    </InfoContainer>
  );
};

export default InfoSection;
