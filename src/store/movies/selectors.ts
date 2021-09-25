import { createSelector } from "reselect";
import { RootStore } from "store/interfaces";

/**
 * Main selectors, we did memoize this functions
 */
const getMovies = (state: RootStore) => state.movies;
export default {
  getGenresData: createSelector(getMovies, (movies) => movies.getGenres.data),
  getGenresLoading: createSelector(
    getMovies,
    (movies) => movies.getGenres.loading
  ),
};
