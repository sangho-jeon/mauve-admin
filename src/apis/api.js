export const API_HOST = "http://localhost3000";

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
