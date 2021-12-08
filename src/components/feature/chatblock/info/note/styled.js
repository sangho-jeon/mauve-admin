import styled from "styled-components";

export const Note = styled.div`
  box-sizing: border-box;
  width: 38vw;
  height: 15vw;
  padding: 1vw;
  background-color: white;
  box-shadow: 0px 5px 10px #00000015;
`;

export const Title = styled.div`
  font-size: 18px;
  font-weight: bold;
`;

export const NoteInput = styled.textarea`
  width: 100%;
  height: 11vw;
  margin-top: 0.5vw;
  resize: none;
  border-style: none;
  font-size: 14px;
`;