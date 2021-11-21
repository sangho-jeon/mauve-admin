import axios from "axios";
import apiUrl, { API_HOST } from "../api";

class RoomService {
  constructor() {
    this.base = axios.create();
    this.userUrl = apiUrl.chat.room;
  }
  async getAllRoom() {}
}

export default RoomService;
