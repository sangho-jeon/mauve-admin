import React from "react";
import { InfoContainer } from "./styled";
import ProfileSection from "./profile";
import LogSection from "./log";
import NoteSection from "./note";

const InfoSection = () => {
  return (
    <InfoContainer>
      <ProfileSection />
      <LogSection />
      <NoteSection />
    </InfoContainer>
  );
};

export default InfoSection;
