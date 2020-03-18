import { combineReducers } from "redux";
import { navigationReducer } from "../components/Navigation/NavigationContainer";
import { sectionReducer } from "../components/Section/SectionContainer";
import { listViewReducer } from "../components/ListView/ListViewContainer";
import { footerReducer } from "../components/Footer/FooterViewContainer";
import { sectionIncorporationReducer } from "../components/Section/SectionIncorporationContainer";

const rootReducers = combineReducers({
  navigationReducer: navigationReducer,
  sectionReducer: sectionReducer,
  listViewReducer: listViewReducer,
  footerReducer: footerReducer,
  sectionIncorporationReducer: sectionIncorporationReducer
});

export default rootReducers;
