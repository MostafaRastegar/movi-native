import rootReducer from "store/rootReducer";

export interface DispatchGeneralInterface {
  type: string;
  payload?: {
    [key: string]: any;
  };
}

export type InitialTemplateType = {
  data?: any;
  loading: boolean;
  error?: any;
};

export type ActionType = { type: string; payload?: any };

export type ActionObjectType = {
  request: string;
  success: string;
  failure: string;
};

export type FireActionParamsType = {
  [key: string]: any;
};

export type AnyObjectI = {
  [key: string]: any;
};

// eslint-disable-next-line no-undef
export type RootStore = ReturnType<typeof rootReducer>;
