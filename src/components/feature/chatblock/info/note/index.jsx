import React, { useState } from "react";
import { Note, Title, NoteInput } from "./styled";

const NoteSection = () => {
  const [userNote, setUserNote] = useState("");

  const onChange = (e) => {
    setUserNote(e.target.value);
  };

  return (
    <Note>
      <Title>회원 노트 테이킹</Title>
      <NoteInput 
        value = {userNote}
        placeholder="회원에 대해 기록하세요"
        onChange={onChange}
      ></NoteInput>
    </Note>
  );
};

export default NoteSection;
