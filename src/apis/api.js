export const API_HOST = "https://api-test.mauve.care/app";

const apiUrl = {
  auth: {
    login: `/auth/login`,
    refresh: `/auth/refresh`,
  },
  chat: {
    room: API_HOST + `/room?limit=20&offset=0`,
    chat: API_HOST + `/chat/`,
    postchat: ``,
  },
  info: {
    log: API_HOST + `/coach/user/log/`,
    profile: API_HOST + `/coach/user/info/`,
    questionnaire: API_HOST + `/questionnaire/`,
    note: API_HOST + `/coach/note/`
  }
};

export default apiUrl;
