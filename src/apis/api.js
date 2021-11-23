export const API_HOST = "http://22f0-1-227-58-161.ngrok.io";

const apiUrl = {
  auth: {
    login: `/auth/login`,
    refresh: `/auth/refresh`,
  },
  chat: {
    room: `/room?limit=20&offset=0`,
  },
};

export default apiUrl;
