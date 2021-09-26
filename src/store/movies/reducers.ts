import { ActionType, InitialTemplateType } from "store/interfaces";
import { generalReducerObject } from "helpers/reduxHelpers";

import types from "./types";

export interface InitialStateInterface {
  getGenres: InitialTemplateType;
  getMoviesByGenre: InitialTemplateType;
}
const initialState: InitialStateInterface = {
  getGenres: {
    loading: false,
    data: null,
    error: false,
  },
  getMoviesByGenre: {
    loading: false,
    data: null,
    error: false,
  },
};

const movies = (state = initialState, action: ActionType) => {
  switch (action.type) {
    case types.GET_GENRES.request:
    case types.GET_GENRES.success:
    case types.GET_GENRES.failure:
      return { ...state, ...generalReducerObject(state, "getGenres", action) };

    case types.GET_GENRES.request:
    case types.GET_GENRES.success:
    case types.GET_GENRES.failure:
      return {
        ...state,
        ...generalReducerObject(state, "getMoviesByGenre", action),
      };
    default:
      return state;
  }
};

export default movies;
