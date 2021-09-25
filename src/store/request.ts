import axios from "axios";
// import LocalStorageService from "./services/storage/localstorageservice";
// import router from "./router/router";
const instanceAxios = axios.create();

// LocalstorageService
const localStorageService = {
  accessToken: "accessToken",
  refreshToken: "refreshToken",
  getAccessToken() {
    return this.accessToken;
  },
  getRefreshToken() {
    return this.refreshToken;
  },
  setToken(token: string) {
    this.refreshToken = token;
    return token;
  },
};

// Add a request interceptor
instanceAxios.interceptors.request.use((config) => {
  const token = localStorageService.getAccessToken();
  if (token) {
    // eslint-disable-next-line no-param-reassign
    config.headers.Authorization = `Bearer ${token}`;
  }

  config.headers["x-rapidapi-host"] = "data-imdb1.p.rapidapi.com";
  config.headers["x-rapidapi-key"] =
    "987bb985d0msha53d9adfaad284ep1aa5c7jsn25b88bf12087";
  // config.headers['Content-Type'] = 'application/json';
  return config;
});

// Add a response interceptor

instanceAxios.interceptors.response.use(
  (response) => response,
  (error) => {
    const originalRequest = error?.config;
    if (
      error?.response?.status === 401 &&
      originalRequest.url === "http://13.232.130.60:8081/v1/auth/token"
    ) {
      //  router.push('/login');
      return Promise.reject(error);
    }

    // eslint-disable-next-line no-underscore-dangle
    if (error?.response?.status === 401 && !originalRequest._retry) {
      // eslint-disable-next-line no-underscore-dangle
      originalRequest._retry = true;
      const refreshToken = localStorageService.getRefreshToken();
      return instanceAxios
        .post("/auth/token", {
          refresh_token: refreshToken,
        })
        .then((res) => {
          if (res.status === 201) {
            localStorageService.setToken(res.data);
            instanceAxios.defaults.headers.common.Authorization = `Bearer ${localStorageService.getAccessToken()}`;
            return axios(originalRequest);
          }
          return res;
        });
    }
    return Promise.reject(error);
  }
);

export default instanceAxios;
