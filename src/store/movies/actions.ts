import { actionMaker } from "helpers/reduxHelpers";
import types from "./types";

export default {
  getGenresRequest: actionMaker(types.GET_GENRES.request),
  getGenresSuccess: actionMaker(types.GET_GENRES.success),
  getGenresFailure: actionMaker(types.GET_GENRES.failure),
};
