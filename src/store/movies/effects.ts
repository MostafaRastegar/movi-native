import { showLoading, hideLoading } from "react-redux-loading-bar";
import { errObject } from "helpers/reduxHelpers";
import moviesActions from "./actions";
import moviesService from "./services";
import { Dispatch } from "redux";
import { DispatchGeneralInterface } from "store/interfaces";

const investorReturnEffects = {
  getGenresRequest:
    () => async (dispatch: Dispatch<DispatchGeneralInterface>) => {
      dispatch(showLoading());
      dispatch(moviesActions.getGenresRequest());

      const response = await moviesService.getGenresService();
      const { data } = response;

      if (data) {
        dispatch(moviesActions.getGenresSuccess(data?.Genres));
        dispatch(hideLoading());
        return data;
      }

      dispatch(moviesActions.getGenresFailure(errObject(response)));
      dispatch(hideLoading());
      return false;
    },
};
export default investorReturnEffects;
