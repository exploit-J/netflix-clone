import { combineReducers } from "redux";
import detailReducer from "./detailReducer";
import movieReducer from "./moveiReducer";

export default combineReducers({
  movie: movieReducer,
  detail: detailReducer,
});
