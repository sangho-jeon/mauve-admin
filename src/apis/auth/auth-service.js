import axios from "axios";
import apiUrl, { API_HOST } from "../api";
import { coachInfo } from "../../utils/coachInfo";

class AuthService {
  constructor() {
    this.base = axios.create();
    this.chatUrl = apiUrl.auth;
    this.accessToken = coachInfo.accessToken;
    this.refreshToken = coachInfo.refreshToken;
  }

  async postChat(sendroom, text) {
    if (this.accessToken !== null && this.refreshToken !== null) {
      const url = this.chatUrl + sendroom;
      console.log(url);
      const config = {
        headers: {
          Refresh: this.refreshToken,
          Authorization: `Bearer ${this.accessToken}`,
        },
      };
      const body = {
        chat: text,
      };

      const response = await this.base.post(url, body, config);
      const result = await response.data;

      const { body: chat } = result;
      console.log(chat);
      return {
        chat,
      };
    }
    return null;
  }
}

export default AuthService;
