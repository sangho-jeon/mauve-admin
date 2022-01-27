import axios from "axios";
import apiUrl, { API_HOST } from "../api";

class RoomService {
  constructor() {
    this.base = axios.create();
    this.chatUrl = apiUrl.chat.room;
    this.roomIdUrl = apiUrl.chat.roomId;
  }
  async getAllRoom(access, refresh) {
    if (access !== null && refresh !== null) {
      const url = this.chatUrl;
      console.log(url);
      const config = {
        headers: {
          Refresh: refresh,
          Authorization: `Bearer ${access}`,
        },
      };

      const response = await this.base.get(url, config);
      const result = await response.data;

      const {
        body: { room },
      } = result;

      console.log(room);

      return {
        isLogin: true,
        room,
      };
    }
    return null;
  }

  async getRoomById(roomId, access, refresh) {
    if (roomId !== "" && access !== null && refresh !== null) {
      const url = this.roomIdUrl + roomId;
      console.log(url);
      const config = {
        headers: {
          Refresh: refresh,
          Authorization: `Bearer ${access}`,
        },
      };

      const response = await this.base.get(url, config);
      const result = await response.data;

      const {
        body: { room },
      } = result;

      console.log(room);

      return {
        isLogin: true,
        room,
      };
    }
    return null;
  }
}

export default RoomService;
