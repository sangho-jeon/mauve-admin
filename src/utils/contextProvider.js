import React, { useReducer } from "react";
import { AiFillDingtalkSquare } from "react-icons/ai";

// context를 생성한 후 export 한다
export const Context = React.createContext();

// state의 초기 값을 설정한다
const initialState = {
  authenticated: false,
  accessToken: null,
  refreshToken: null,
  id: null,
};

// reducer는 action에서 받은 type에 따라서 state를 변경한다.
function reducer(state, action) {
  switch (action.type) {
    case "SET_TOKEN":
      return {
        ...state,
        accessToken: action.accessToken,
        refreshToken: action.refreshToken,
        authenticated: action.result,
        id: action.id,
      };
    default:
      return state;
  }
}

const ContextProvider = ({ children }) => {
  // useReducer를 사용해서 state와 dispatch를 생성한다.
  const [state, contextDispatch] = useReducer(reducer, initialState);

  return (
    <Context.Provider
      //provider에 value props로 state와 dispatch를 내려준다.
      value={{ value: state, contextDispatch }}
    >
      {children}
    </Context.Provider>
  );
};

export default ContextProvider;
