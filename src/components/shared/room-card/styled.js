import styled from "styled-components";

export const Card = styled.button`
  width: 22vw;
  height: 5vw;
  border: none;
  border-radius: 5px;
  margin-top: 1vw;
  font-size: 16px;
  background-color: white;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const Left = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 18vw;
  height: 4vw;
  text-align: left;
`;
export const Right = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: space-between;
  height: 4vw;
`;

export const Name = styled.div`
  font-size: 24px;
  font-weight: bold;
  text-overflow: ellipsis;
`;
export const Text = styled.div`
  height: 18px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;
export const Count = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  float: right;
  width: 2vw;
  height: 2vw;
  border-radius: 1vw;
  font-weight: bold;
  background-color: gray;
  color: white;
`;
export const Waiting = styled.div`
  font-weight: bold;
  color: red;
`;
