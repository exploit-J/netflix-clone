import { combineReducers } from "redux";
import movieReducer from "./moveiReducer";

export default combineReducers({ movie: movieReducer });
