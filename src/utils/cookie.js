import { Cookies } from "react-cookie";

const cookie = new Cookies();

export const setRefreshCookie = (refreshToken) => {
  return cookie.set("refreshToken", refreshToken);
};

export const getRefreshCookie = () => {
  return cookie.get("refreshToken");
};
