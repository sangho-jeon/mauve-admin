import React, { useContext, useState } from "react";
import { Context } from "../../utils/contextProvider";
import {
  Banner,
  Loginblock,
  LoginInput,
  LoginSection,
  LoginButton,
} from "./styled";

const Login = () => {
  const [password, setPassword] = useState("");
  const { value, contextDispatch } = useContext(Context);

  const handleSubmit = (e) => {
    console.log("login!!");
    contextDispatch({
      type: "SET_TOKEN",
      result: true,
      token: "test",
    });
  };

  return (
    <LoginSection>
      <Loginblock>
        <Banner>Mauve</Banner>
        <LoginInput placeholder="please type password" />
        <LoginButton onClick={handleSubmit}>Login</LoginButton>
      </Loginblock>
    </LoginSection>
  );
};

export default Login;
