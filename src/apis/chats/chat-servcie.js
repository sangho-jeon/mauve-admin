import axios from "axios";
import apiUrl, { API_HOST } from "../api";
import { coachInfo } from "../../utils/coachInfo";
import moment from "moment";
import "moment-timezone";

class ChatService {
  constructor() {
    this.base = axios.create();
    this.chatUrl = apiUrl.chat.chat;
    this.accessToken = coachInfo.accessToken;
    this.refreshToken = coachInfo.refreshToken;
  }

  async getChatByRoomId(room) {
    if (this.accessToken !== null && this.refreshToken !== null) {
      const date = moment().tz("Asia/Seoul").format("YYYY-MM-DDTHH:59");
      const yesterday = moment()
        .subtract(2, "day")
        .tz("Asia/Seoul")
        .format("YYYY-MM-DDTHH:59");
      const url = this.chatUrl + room + "?from=" + yesterday + "&to=" + date;
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

export default ChatService;
