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
  { keyTitle: "features" },
  { keyTitle: "incorporation" },
  { keyTitle: "signin" }
];

const socialtems: SocialItem[] = [
  { name: "la la-facebook" },
  { name: "la la-twitter" },
  { name: "lab la-line" },
  { name: "la la-envelope" }
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
