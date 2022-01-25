import { Cookies } from "react-cookie";

const cookie = new Cookies();

export const setRefreshCookie = (refreshToken) => {
  return cookie.set("refreshToken", refreshToken);
};

export const getRefreshCookie = () => {
  return cookie.get("refreshToken");
};

export const setAccessCookie = (accessToken) => {
  return cookie.set("accessToken", accessToken);
};

export const getAccessCookie = () => {
  return cookie.get("accessToken");
};

export const setIdCookie = (id) => {
  return cookie.set("id", id);
};

export const getId = () => {
  return cookie.get("id");
};
