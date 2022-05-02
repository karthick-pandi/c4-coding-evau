import { legacy_createStore } from "redux";
import { combineReducers } from "redux";
import { reducer } from "./reducer";

const reducers = combineReducers({
  reducer: reducer,
});

export const store = legacy_createStore(reducers);
