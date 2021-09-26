import endpoints from "constants/endpoints";
import request from "store/request";

export default {
  getGenresService() {
    const url = endpoints.MOVI.GET_GENRES();
    return request.get(url);
  },

  getMoviesByGenreService(genre: string) {
    const url = endpoints.MOVI.GET_MOVIES_BY_GENRE(genre);
    return request.get(url);
  },
};
