import React, { useContext, useState } from "react";
import AuthService from "../../apis/auth/auth-service";
import { Context } from "../../utils/contextProvider";
import {
  Banner,
  Loginblock,
  LoginInput,
  LoginSection,
  LoginButton,
} from "./styled";

const authService = new AuthService();

const Login = () => {
  const [password, setPassword] = useState("");
  const { value, contextDispatch } = useContext(Context);

  const handleSubmit = async (e) => {
    try {
      const result = await authService.login(password);
      const accessToken = result.result.accessToken;
      const refreshToken = result.result.refreshToken;
      contextDispatch({
        type: "SET_TOKEN",
        result: true,
        accessToken: accessToken,
        refreshToken: refreshToken,
      });
    } catch (error) {
      console.log(error);
    }
  };

  const handleInput = (e) => {
    setPassword(e.target.value);
  };

  return (
    <LoginSection>
      <Loginblock>
        <Banner>Mauve</Banner>
        <LoginInput placeholder="please type password" onChange={handleInput} />
        <LoginButton onClick={handleSubmit}>Login</LoginButton>
      </Loginblock>
    </LoginSection>
  );
};

export default Login;
