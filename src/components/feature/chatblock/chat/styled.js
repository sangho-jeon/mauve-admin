import styled from "styled-components";
import { AiFillCamera } from "react-icons/ai";

export const Chatlayout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 31vw;
  height: 53vw;
`;

export const ChatContainer = styled.div`
  box-sizing: border-box;
  display: block;
  overflow-y: auto;
  width: 31vw;
  height: 46vw;
  padding: 1vw 0;
  background-color: white;
`;

export const ChatInput = styled.textarea`
  width: 27vw;
  height: 5vw;
  margin-top: 1vw;
  padding: 0.5vw;
  resize: none;
  border-color: gray;

  border-radius: 10px;

  box-shadow: 0px 5px 10px #00000015;
`;

export const ChatInputContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const ImageButton = styled.input`
  width: 1.5vw;
  height: 1.5vw;
  padding-left: 0vw;
  margin-left: 0.5vw;
  background-color: transparent;

  border: none;
  cursor: pointer;
`;

export const ImageIcon = styled(AiFillCamera)`
  width: 1.5vw;
  height: 1.5vw;
  padding-right: 0.2vw;
  color: rgb(52, 120, 246);
  pointer: cursor:
`;
