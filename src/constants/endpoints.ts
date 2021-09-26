import Constants from "expo-constants";

const localEnv: {
  [key: string]: any;
} = Constants?.manifest?.extra || {
  HOSTURL: "",
};

export default {
  CONFIGURATION: {
    GET_CONFIGURATION_SERVICE: () =>
      `${localEnv.HOSTURL}/configuration/api/v1/configurations`,
  },
  USERS: {
    GET_ALL_USERS_SERVICE: () => `${localEnv.HOSTURL}/api/v1/Users`,
  },
  MOVI: {
    GET_GENRES: () => `${localEnv.HOSTURL}/genres/`,
    GET_MOVIES_BY_GENRE: (genre: string) =>
      `${localEnv.HOSTURL}/movie/byGen/${genre}`,
  },
};
