import axios from "axios";
import apiUrl, { API_HOST } from "../api";

class RoomService {
  constructor() {
    this.base = axios.create();
    this.chatUrl = apiUrl.chat.room;
  }
  async getAllRoom() {
    const accessToken =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxODRlZTBkNGI1YmYwZTVmNThlMzkxZCIsInJvbGUiOiJjb2FjaCIsImlhdCI6MTYzNjEwMTY0NSwiZXhwIjoxNjY3NjU5MjQ1fQ.-m-B3ltPMLpjbgRsbQcsQsaHGxVpO1zvcw8czRbY-L4";
    const refreshToken =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2MzYxMDE2NDUsImV4cCI6MTY2NzY1OTI0NX0.9CRfrnEsq_QImJnY2z3MgqsC74ZA4BEFJYSNCCbsm3M";

    if (accessToken !== null && refreshToken !== null) {
      const url = this.chatUrl;
      console.log(url);
      const config = {
        headers: {
          Refresh: refreshToken,
          Authorization: `Bearer ${accessToken}`,
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
