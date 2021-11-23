import styled from "styled-components";

export const Card = styled.button`
  width: 20vw;
  height: 4vw;
  border: none;
  border-radius: 5px;
  margin-left: 0.5vw;
  margin-top: 1vw;
  font-size: 14px;
  background-color: white;
  cursor: pointer;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;
export const Left = styled.div`
  display: block;
  margin-left: 1vw;
  width: 5vw;
  text-align: left;
`;
export const Right = styled.div`
  display: block;
  text-align: left;
`;

export const Name = styled.div`
  width: 5vw;
  text-overflow: ellipsis;
`;
export const Text = styled.div`
  overflow: hidden;
  text-overflow: ellipsis;
`;
export const Count = styled.div``;
export const Waiting = styled.div``;
