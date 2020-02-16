import { combineReducers } from "redux";
import { navigationReducer } from "../components/Navigation/NavigationContainer";

const rootReducers = combineReducers({ navigationReducer: navigationReducer });

export default rootReducers;
