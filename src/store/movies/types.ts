import { makeActionsObject } from "helpers/reduxHelpers";

export default {
  GET_GENRES: makeActionsObject("GET_GENRES"),
  GET_MOVIES_BY_GENRE: makeActionsObject("GET_MOVIES_BY_GENRE"),
};
