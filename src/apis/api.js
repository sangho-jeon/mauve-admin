export const API_HOST = "https://api.mauve.care/app";

const apiUrl = {
  auth: {
    login: API_HOST + `/coach/login`,
    refresh: API_HOST + `/coach/refresh`,
  },
  chat: {
    room: API_HOST + `/room?limit=20&offset=0`,
    chat: API_HOST + `/chat/`,
    media: `/chat/`,
  },
  info: {
    log: API_HOST + `/coach/user/log/`,
    profile: API_HOST + `/coach/user/info/`,
    questionnaire: API_HOST + `/questionnaire/`,
    note: API_HOST + `/coach/note/`,
  },
};

export default apiUrl;
