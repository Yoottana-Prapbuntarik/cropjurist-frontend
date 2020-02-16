import { connect } from "react-redux";
import Navigation from "./Navigation";
import NavigationItem from "./NavigationInterfaces";

enum NavigationAction {
  SHOW_ALL = "SHOW_ALL"
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
    case NavigationAction.SHOW_ALL:
      return { ...state, items: action.navigationItems };
    default:
      return state;
  }
};

const mapStateToProps = (state: any) => ({
  navigationItems: state.navigationReducer
});

export default connect(mapStateToProps)(Navigation);
