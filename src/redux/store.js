import { createStore, applyMiddleware } from "redux";
// rootReducer는 임의작명, reducers폴더 경로 지정하면 자동으로 index.js를 가져온다.
import rootReducer from "./reducers";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

let store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
