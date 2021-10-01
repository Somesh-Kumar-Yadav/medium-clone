import { applyMiddleware, combineReducers, createStore } from "redux";
import { authReducer } from "./auth/reducers.js";
import { userReducer } from "./user/reducers.js";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
	auth: authReducer,
	user: userReducer,
});
export const store = createStore(rootReducer, applyMiddleware(thunk));
