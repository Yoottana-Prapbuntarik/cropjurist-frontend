import { connect } from "react-redux";
import Navigation from "./Navigation";
import NavigationItem from "./NavigationInterfaces";
import { Dispatch } from "redux";
import { i18n } from "../../i18n";

enum NavigationAction {
  CHANGE_LANGUAGE = "CHANGE_LANGUAGE"
}

const navigationItems: NavigationItem[] = [
  { keyTitle: "features", routePath: "/" },
  { keyTitle: "incorporation", routePath: "/" },
  { keyTitle: "signin", routePath: "/" }
];

export const navigationReducer = (
  state: NavigationItem[] = navigationItems,
  action: any
) => {
  switch (action.type) {
    case NavigationAction.CHANGE_LANGUAGE:
      i18n.changeLanguage(i18n.language === "en" ? "th" : "en");
      return { ...state, items: action.navigationItems };
    default:
      return state;
  }
};

const changeLanguageAction: any = async () => ({
  type: NavigationAction.CHANGE_LANGUAGE,
  navigationItems: navigationItems
});

const mapStateToProps = (state: any) => ({
  navigationItems: state.navigationReducer
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  changeLanguage: () => dispatch(changeLanguageAction)
});

export default connect(mapStateToProps, mapDispatchToProps)(Navigation);
