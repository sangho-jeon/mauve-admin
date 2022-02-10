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
  padding-right: 0.7vw;
  resize: none;
  font-size: 1vw;
  border: none;
  outline: none;
`;

export const ChatInputContainer = styled.div`
  width: 32.8vw;
  display: flex;
`;

export const ImageIcon = styled(AiFillCamera)`
  width: 1.5vw;
  height: 1.5vw;
  padding: 0.3vw;
  color: #D0D0D0;
  cursor: pointer;
`;

export const Button = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 4vw;
  height: 2vw;
  border-radius: 0.2vw;
  cursor: pointer;
  text-align: center;
  font-weight: 700;
  font-size: 1vw;
  color: #878787;
  background-color: #F4F4F4;
`;