import { connect } from "react-redux";
import Signin from "./Signin";
import { SiginPresenter, SubscribeItem } from "./SigninInterfaces";

const subscribeItems: SubscribeItem = {
  signinLabelUsername: "signinLabelUsername",
  signinPlaceholderUsername: "signinPlaceholderUsername",
  signinLabelPassword: "signinLabelPassword",
  signinPlaceholderPassword: "signinPlaceholderPassword",
  signinRemember: "signinRemember",
  signinForgot: "signinForgot",
  signinSubmit: "signinSubmit",
  signupAccount: "signupAccount",
  signup: "signup"
};

const signinPresenter: SiginPresenter = {
  keySigninHeader: "signinHeader",
  subscribeItem: subscribeItems
};
export const signinReducer = (state: SiginPresenter = signinPresenter) => {
  return state;
};

const mapStateToProps = (state: any) => ({
  signinPresenter: state.signinReducer
});

export default connect(mapStateToProps)(Signin);
