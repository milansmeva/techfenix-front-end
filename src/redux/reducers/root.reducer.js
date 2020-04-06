import { combineReducers } from "redux";

import reports from "./reports.reducer";

const rootState = {
  reports: [],
};

const reducers = combineReducers({
  reports,
});

export default reducers;
