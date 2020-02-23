import { combineReducers } from "redux";
import { navigationReducer } from "../components/Navigation/NavigationContainer";
import { sectionReducer } from "../components/Section/SectionContainer";
const rootReducers = combineReducers({
  navigationReducer: navigationReducer,
  sectionReducer: sectionReducer
});

export default rootReducers;
