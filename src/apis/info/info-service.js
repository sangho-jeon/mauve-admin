import axios from "axios";
import apiUrl, { API_HOST } from "../api";
import { coachInfo } from "../../utils/coachInfo";

class InfoService {
  constructor() {
    this.base = axios.create();
    this.logUrl = apiUrl.info.log;
    this.profileUrl = apiUrl.info.profile;
    this.accessToken = coachInfo.accessToken;
    this.refreshToken = coachInfo.refreshToken;
  }
  async getUserLog(userId) {
    if (this.accessToken !== null && this.refreshToken !== null) {
      const url = this.logUrl + userId;
      console.log(url);
      const config = {
        headers: {
          Refresh: this.refreshToken,
          Authorization: `Bearer ${this.accessToken}`,
        },
      };

      const response = await this.base.get(url, config);
      const result = await response.data;

      const { body: log } = result;

      return {
        isLogin: true,
        log,
      };

    }
    return null;
  }

  async getUserInfo(userId) {
    if (this.accessToken !== null && this.refreshToken !== null) {
      const url = this.profileUrl + userId;
      console.log(url);
      const config = {
        headers: {
          Refresh: this.refreshToken,
          Authorization: `Bearer ${this.accessToken}`,
        },
      };

      const response = await this.base.get(url, config);
      const result = await response.data;

      const { body: profile } = result;

      return {
        isLogin: true,
        profile,
      };

    }
    return null;
  }

}

export default InfoService;
