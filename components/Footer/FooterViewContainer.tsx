import { connect } from "react-redux";
import Footer from "./Footer";
import {
  SubscribeItem,
  FooterMenu,
  MenuItem,
  SocialItem,
  FooterItem
} from "./FooterViewInterfaces";

const footerMenuItems: MenuItem[] = [
  { keyTitle: "features", routePath: "/" },
  { keyTitle: "incorporation", routePath: "/" },
  { keyTitle: "signin", routePath: "/" }
];

const socialtems: SocialItem[] = [
  { name: "la la-facebook", routePath: "/" },
  { name: "la la-twitter", routePath: "/" },
  { name: "lab la-line", routePath: "/" },
  { name: "la la-envelope", routePath: "/" }
];

const footerMenu: FooterMenu = {
  keyHeaderTitle: "pages",
  footerMenuItems: footerMenuItems
};

const subScribeItem: SubscribeItem = {
  keySubScribeTitle: "subScribeTitle",
  keySubScribeDescription: "subScribeDescription",
  keySubDescriptionForSubScribe: "subDescriptionForSubScribe",
  keyEmail: "email",
  keySubmitButton: "subscribe"
};

const footerItem: FooterItem = {
  subscribeItem: subScribeItem,
  menu: footerMenu,
  socialItems: socialtems
};

export const footerReducer = (state: FooterItem = footerItem) => {
  return state;
};

const mapStateToProps = (state: any) => ({
  footerItem: state.footerReducer
});

export default connect(mapStateToProps)(Footer);
