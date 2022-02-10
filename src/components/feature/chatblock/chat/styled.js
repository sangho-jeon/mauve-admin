import styled from "styled-components";
import { AiFillCamera } from "react-icons/ai";

export const Chatlayout = styled.div`
  display: flex;
  flex-direction: column;
  width: 32.8vw;
  height: 55vw;
  border: 0.1vw solid #E0E0E0;
  border-bottom: none;
  border-top: none;
`;

export const ChatRoomTitle = styled.div`
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 32.8vw;
  height: 3.5vw;
  padding: 0 1vw;
  border-bottom: 0.1vw solid #E0E0E0;
`;

export const UserName = styled.div`
  font-size: 1.3vw;
  font-weight: 600;
  color: #303030;
`;

export const ChatContainer = styled.div`
  box-sizing: border-box;
  display: block;
  overflow-y: auto;
  width: 32.8vw;
  height: 45.5vw;
  padding: 0.5vw 1vw;
  background-color: white;
  border-bottom: 0.1vw solid #E0E0E0;
`;

export const ChatInput = styled.textarea`
  box-sizing: border-box;
  width: 32.8vw;
  height: 6vw;
  padding: 0.5vw;
  padding-right: 2vw;
  resize: none;
  font-size: 1vw;
  border: none;
  outline: none;
`;

export const ChatInputContainer = styled.div`
  width: 32.8vw;
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
  top: 49.3vw;
  left: 53.8vw;
  width: 1.5vw;
  height: 1.5vw;
  padding-left: 0.3vw;
  color: #D0D0D0;
  cursor: pointer;
`;

export const Button = styled.div`
  width: 3.5vw;
  height: 1.5vw;
  margin-top: 1vw;
  padding: 0.5vw 0.7vw;
  border-radius: 1.2vw;
  border: 0.1vw solid #cccccc;
  cursor: pointer;
  text-align: center;
  font-weight: 600;
  font-size: 1vw;
`;