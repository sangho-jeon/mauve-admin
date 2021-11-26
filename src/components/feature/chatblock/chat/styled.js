import styled from "styled-components";

export const Chatlayout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 30vw;
  height: 50vw;
  background-color: #cccccc;
  box-shadow: 0px 5px 10px #00000015;
`;

export const ChatContainer = styled.div`
  display: block;
  overflow-y: auto;
  margin-top: 1vw;
  width: 30vw;
  height: 40vw;
  background-color: white;
`;

export const ChatInput = styled.input`
  width: 27vw;
  height: 4vw;
  margin-top: 1vw;
  border-color: gray;

  border-radius: 10px;

  box-shadow: 0px 5px 10px #00000015;
`;
