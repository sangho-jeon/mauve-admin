import React, { useState, useEffect } from "react";
import { Note, Title, Button, NoteInput } from "./styled";
import InfoService from "../../../../../apis/info/info-service";

const infoService = new InfoService();

const NoteSection = (prop) => {
  const [userNote, setUserNote] = useState("");

  const getNoteData = async () => {
    try {
      const { userNote } = await infoService.getUserNote(prop.id);
      setUserNote(userNote);
      console.log(userNote);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getNoteData();
  }, [prop.id]);

  const updateNoteData = async () => {
    try {
      const ret = await infoService.updateUserNote(prop.id, userNote);
      if ( ret === false ) {
        console.log("updateNoteData", ret);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const onChange = (e) => {
    setUserNote(e.target.value);
  };

  const buttonClick = () => {
    updateNoteData();
    alert("저장했습니다.");
  }

  return (
    <Note>
      <Title>회원 노트 테이킹<Button onClick={() => buttonClick()}>저장</Button></Title>
      <NoteInput 
        value = {userNote.note}
        placeholder="회원에 대해 기록하세요"
        onChange={onChange}
      ></NoteInput>
    </Note>
  );
};

export default NoteSection;
