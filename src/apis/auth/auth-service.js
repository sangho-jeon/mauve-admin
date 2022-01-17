import axios from "axios";
import apiUrl, { API_HOST } from "../api";

class AuthService {
  constructor() {
    this.base = axios.create();
    this.auth = apiUrl.auth.login;
  }

  async login(password) {
    const url = this.auth;
    const body = {
      pass_code: password,
    };
    const response = await this.base.post(url, body);
    const result = response.data.body;

    return {
      result,
    };
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
