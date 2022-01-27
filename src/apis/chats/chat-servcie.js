import axios from "axios";
import apiUrl, { API_HOST } from "../api";
import moment from "moment";
import "moment-timezone";

class ChatService {
  constructor() {
    this.base = axios.create();
    this.chatUrl = apiUrl.chat.chat;
  }

  async getChatByRoomId(room, access, refresh) {
    if (room !== "" && access !== null && refresh !== null) {
      const date = moment().tz("Asia/Seoul").format("YYYY-MM-DDTHH:59");
      const yesterday = moment()
        .subtract(7, "day")
        .tz("Asia/Seoul")
        .format("YYYY-MM-DDTHH:59");
      const url = this.chatUrl + room + "?from=" + yesterday + "&to=" + date;
      console.log(url);
      const config = {
        headers: {
          Refresh: refresh,
          Authorization: `Bearer ${access}`,
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

  async postChat(sendroom, text, access, refresh) {
    if (access !== null && refresh !== null) {
      const url = this.chatUrl + sendroom;
      console.log(url);
      const config = {
        headers: {
          Refresh: refresh,
          Authorization: `Bearer ${access}`,
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

  async postMedia(sendroom, file, access, refresh) {
    if (access !== null && refresh !== null) {
      const url = this.chatUrl + sendroom + "/media/picture";
      console.log(url);
      const config = {
        headers: {
          Refresh: refresh,
          Authorization: `Bearer ${access}`,
          "Content-Type": "multipart/form-data",
        },
      };

      const response = await this.base.post(url, file, config);
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
