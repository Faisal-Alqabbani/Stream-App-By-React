import * as Types from "../actions/types";
import _ from "lodash";
export default (state = {}, action) => {
  switch (action.type) {
    case Types.FETCH_STREAMS:
      // this is how deal with list of records in redux.
      return { ...state, ..._.mapKeys(action.payload, "id") };
    case Types.FETCH_STREAM:
      // I used this way because that return Single of record. that's it
      return { ...state, [action.payload.id]: action.payload };
    case Types.CREATE_STREAM:
      // this is will get back single recrod from API.
      return { ...state, [action.payload.id]: action.payload };
    case Types.EDIT_STREAM:
      return { ...state, [action.payload.id]: action.payload };
    case Types.DELETE_STREAM:
      return _.omit(state, action.payload);
    default:
      return state;
  }
};
