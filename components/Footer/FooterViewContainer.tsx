import { connect } from "react-redux";
import Footer from "./Footer";
import {
  SubscribeItem,
  FooterMenu,
  MenuItem,
  SocialItem,
  ErrorMessageForm,
  FooterPresenter
} from "./FooterViewInterfaces";

const footerMenuItems: MenuItem[] = [
  { keyTitle: "features", routePath: "/index" },
  { keyTitle: "incorporation", routePath: "/incorporation" },
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
const errorMessageForm: ErrorMessageForm = {
  keyEmailErrorMessage : "EmailErrorMessage"
}
const footerPresenter: FooterPresenter = {
  subscribeItem: subScribeItem,
  menu: footerMenu,
  socialItems: socialtems,
  errorMessageForm:errorMessageForm
};

export const footerReducer = (state: FooterPresenter = footerPresenter) => {
  return state;
};

const mapStateToProps = (state: any) => ({
  footerPresenter: state.footerReducer
});

export default connect(mapStateToProps)(Footer);
