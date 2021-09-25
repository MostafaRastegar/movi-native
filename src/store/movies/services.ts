import endpoints from "constants/endpoints";
import request from "store/request";

export default {
  getGenresService() {
    const url = endpoints.MOVI.GET_GENRES();
    return request.get(url);
  },
};
