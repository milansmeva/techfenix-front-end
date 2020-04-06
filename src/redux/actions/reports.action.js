export const CREATE_REPORT = "CREATE_REPORT";
export const UPDATE_REPORT = "UPDATE_REPORT";
export const DELETE_REPORT = "DELETE_REPORT";
export const ADD_TIMELINE_ITEM = "ADD_TIMELINE_ITEM";
export const EDIT_TIMELINE_ITEM = "EDIT_TIMELINE_ITEM";
export const DELETE_TIMELINE_ITEM = "DELETE_TIMELINE_ITEM";

export const createReport = function (report) {
  return {
    type: CREATE_REPORT,
    report,
  };
};
