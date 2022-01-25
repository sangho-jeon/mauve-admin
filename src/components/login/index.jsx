import React, { useContext, useState, useEffect } from "react";
import AuthService from "../../apis/auth/auth-service";
import { Context } from "../../utils/contextProvider";
import {
  setRefreshCookie,
  getRefreshCookie,
  setAccessCookie,
  getAccessCookie,
  getId,
} from "../../utils/cookie";
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

  useEffect(() => {
    const accessToken = getAccessCookie();
    const refreshToken = getRefreshCookie();
    const id = getId();
    console.log(accessToken);
    if (accessToken) {
      contextDispatch({
        type: "SET_TOKEN",
        result: true,
        id: id,
        accessToken: accessToken,
        refreshToken: refreshToken,
      });
    }
  }, []);

  const handleSubmit = async (e) => {
    try {
      const result = await authService.login(password);
      const accessToken = result.result.accessToken;
      const refreshToken = result.result.refreshToken;
      const id = result.result.id;
      contextDispatch({
        type: "SET_TOKEN",
        result: true,
        id: id,
        accessToken: accessToken,
        refreshToken: refreshToken,
      });
      setRefreshCookie(refreshToken);
      setAccessCookie(accessToken);
      console.log(getRefreshCookie());
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
