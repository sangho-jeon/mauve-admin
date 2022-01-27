import { Cookies } from "react-cookie";

const cookie = new Cookies();

export const setRefreshCookie = (refreshToken) => {
  return cookie.set("refreshToken", refreshToken, { secure: true });
};

export const getRefreshCookie = () => {
  return cookie.get("refreshToken");
};

export const setAccessCookie = (accessToken) => {
  return cookie.set("accessToken", accessToken, { secure: true });
};

export const getAccessCookie = () => {
  return cookie.get("accessToken");
};

export const setIdCookie = (id) => {
  return cookie.set("id", id, { secure: true });
};

export const getId = () => {
  return cookie.get("id");
};
