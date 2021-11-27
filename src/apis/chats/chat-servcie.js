import axios from "axios";
import apiUrl, { API_HOST } from "../api";
import { coachInfo } from "../../utils/coachInfo";

class ChatService {
  constructor() {
    this.base = axios.create();
    this.chatUrl = apiUrl.chat.chat;
    this.accessToken = coachInfo.accessToken;
    this.refreshToken = coachInfo.refreshToken;
  }

  async getChatByRoomId(room) {
    if (this.accessToken !== null && this.refreshToken !== null) {
      const url =
        this.chatUrl + room + "?from=2021-11-17T22:00&to=2021-11-27T18:00";
      console.log(url);
      const config = {
        headers: {
          Refresh: this.refreshToken,
          Authorization: `Bearer ${this.accessToken}`,
        },
      };

      const response = await this.base.get(url, config);
      const result = await response.data;

      const { body: chat } = result;
      console.log(chat);

      return {
        isLogin: true,
        chat,
      };
    }
    return null;
  }

  async postChat(sendroom, text) {
    if (this.accessToken !== null && this.refreshToken !== null) {
      const url = "http://localhost:3000" + this.chatUrl + sendroom;
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

export default ChatService;
