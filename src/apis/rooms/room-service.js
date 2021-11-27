import axios from "axios";
import apiUrl, { API_HOST } from "../api";
import { coachInfo } from "../../utils/coachInfo";

class RoomService {
  constructor() {
    this.base = axios.create();
    this.chatUrl = apiUrl.chat.room;
    this.accessToken = coachInfo.accessToken;
    this.refreshToken = coachInfo.refreshToken;
  }
  async getAllRoom() {
    if (this.accessToken !== null && this.refreshToken !== null) {
      const url = this.chatUrl;
      console.log(url);
      const config = {
        headers: {
          Refresh: this.refreshToken,
          Authorization: `Bearer ${this.accessToken}`,
        },
      };

      const response = await this.base.get(url, config);
      const result = await response.data;

      const {
        body: { room },
      } = result;

      return {
        isLogin: true,
        room,
      };
    }
    return null;
  }
}

export default RoomService;
