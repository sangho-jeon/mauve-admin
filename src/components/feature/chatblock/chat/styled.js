import styled from "styled-components";

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
  width: 30vw;
  height: 5vw;
  margin-top: 1vw;
  padding: 0.5vw;
  resize: none;
  border-color: gray;
  border-radius: 0.7vw;
  box-shadow: 0px 5px 10px #00000015;
  font-size: 1vw;
`;
