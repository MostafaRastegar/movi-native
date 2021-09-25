// Imports: Dependencies
import { combineReducers } from "redux";
import { loadingBarReducer } from "react-redux-loading-bar";

// Imports: Reducers
import movies from "./movies/reducers";

interface IState {
  movies?: any;
  loadingBar?: any;
}
// Redux: Root Reducer
const rootReducer = combineReducers<IState>({
  movies,
  loadingBar: loadingBarReducer,
});

// Exports
export default rootReducer;
