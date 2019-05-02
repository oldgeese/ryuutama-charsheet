import { combineReducers } from "redux";
import {
  SEARCH_START,
  SEARCH_SUCCESS,
  SEARCH_FAIL,
} from "./actions";

function dataReducer(state = null, action) {
  switch (action.type) {
    case SEARCH_START:
      return null;
    case SEARCH_SUCCESS:
      return action.payload;
    default:
      return state;
  }
}

function errorReducer(state = null, action) {
  switch (action.type) {
    case SEARCH_FAIL:
      return action.payload;
    default:
      return state;
  }
}

const searchApp = combineReducers({
  data: dataReducer,
  error: errorReducer,
});

export default searchApp
