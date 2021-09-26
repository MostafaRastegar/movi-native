import { actionMaker } from "helpers/reduxHelpers";
import types from "./types";

export default {
  getGenresRequest: actionMaker(types.GET_GENRES.request),
  getGenresSuccess: actionMaker(types.GET_GENRES.success),
  getGenresFailure: actionMaker(types.GET_GENRES.failure),

  getMoviesByGenreRequest: actionMaker(types.GET_MOVIES_BY_GENRE.request),
  getMoviesByGenreSuccess: actionMaker(types.GET_MOVIES_BY_GENRE.success),
  getMoviesByGenreFailure: actionMaker(types.GET_MOVIES_BY_GENRE.failure),
};
