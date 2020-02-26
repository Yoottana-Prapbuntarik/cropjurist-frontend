import { combineReducers } from "redux";
import { navigationReducer } from "../components/Navigation/NavigationContainer";
import { sectionReducer } from "../components/Section/SectionContainer";
import { listViewReducer } from "../components/ListView/ListViewContainer";

const rootReducers = combineReducers({
  navigationReducer: navigationReducer,
  sectionReducer: sectionReducer,
  listViewReducer: listViewReducer
});

export default rootReducers;
