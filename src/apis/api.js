export const API_HOST = "http://7ebf-223-62-175-194.ngrok.io";

const apiUrl = {
  auth: {
    login: `/auth/login`,
    refresh: `/auth/refresh`,
  },
  chat: {
    room: `/room?limit=20&offset=0`,
    chat: `/chat/`,
    postchat: ``,
  },
};

export default apiUrl;
