import { ActionObjectType } from "store/interfaces";

export const actionMaker =
  (type: string) =>
  (payload: any = {}) => ({
    type,
    payload,
  });

export const makeActionsObject = (actionName: string): ActionObjectType => {
  return {
    request: `${actionName}_REQUEST`,
    success: `${actionName}_SUCCESS`,
    failure: `${actionName}_FAILURE`,
  };
};

export const errObject = (response: { [key: string]: any }) => ({
  status: response.status,
  problem: response.problem,
  data: response,
});

export const payloadReducerSuccessObject = (payload: any) => ({
  loading: false,
  data: payload,
  error: false,
});

export const payloadReducerRequestObject = () => ({
  loading: true,
  data: null,
  error: false,
});

export const payloadReducerErrorObject = () => ({
  loading: false,
  data: null,
  error: true,
});

const typePattern = (actionType: string, typeName: string) => {
  return actionType.search(typeName) !== -1 ? true : false;
};

export const generalReducerObject = (
  state: { [key: string]: any },
  reducerName: string,
  action: {
    payload?: any;
    type: string;
  }
) => {
  const updatedState: { [key: string]: any } = { ...state };
  if (typePattern(action.type, "SUCCESS")) {
    updatedState[reducerName] = payloadReducerSuccessObject(action?.payload);
    return updatedState;
  }
  if (typePattern(action.type, "REQUEST")) {
    updatedState[reducerName] = payloadReducerRequestObject();
    return updatedState;
  }
  if (typePattern(action.type, "FAILURE")) {
    updatedState[reducerName] = payloadReducerErrorObject();
    return updatedState;
  }
  return state;
};
