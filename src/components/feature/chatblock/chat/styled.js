import styled from "styled-components";
import { AiFillCamera } from "react-icons/ai";

export const Chatlayout = styled.div`
  display: flex;
  flex-direction: column;
  width: 33vw;
  height: 55vw;
`;

export const ChatContainer = styled.div`
  box-sizing: border-box;
  display: block;
  overflow-y: auto;
  width: 33vw;
  height: 48vw;
  padding: 1vw;
  background-color: white;
  border: 0.2vw solid #E0E0E0;
`;

export const ChatInput = styled.textarea`
  width: 33vw;
  height: 6vw;
  padding: 0.5vw;
  padding-right: 2vw;
  resize: none;
  font-size: 1vw;
  border: 0.2vw solid #E0E0E0;
  border-top: none;
  outline: none;
`;

export const ChatInputContainer = styled.div`
  width: 33vw;
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
  position: fixed;
  top: 48.1vw;
  left: 53.6vw;
  width: 1.5vw;
  height: 1.5vw;
  padding-left: 0.3vw;
  color: #D0D0D0;
  cursor: pointer;
`;
