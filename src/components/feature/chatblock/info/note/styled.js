import styled from "styled-components";

export const Note = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 42vw;
  height: 15vw;
  padding: 1vw;
  background-color: white;
  border-radius: 0.3vw;
`;

export const Title = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  font-size: 1.3vw;
  font-weight: bold;
`;

export const Button = styled.div`
  box-sizing: border-box;
  width: 4vw;
  height: 2vw;
  background-color: #3988FF;
  color: #FFFFFF;
  padding: 0.3vw;
  border-radius: 0.2vw;
  text-align: center;
  font-size: 1vw;
  font-weight: bold;
  cursor: pointer;
`;

export const NoteInput = styled.textarea`
  width: 100%;
  height: 10.2vw;
  resize: none;
  border-style: none;
  font-size: 1vw;
  outline: none;
`;