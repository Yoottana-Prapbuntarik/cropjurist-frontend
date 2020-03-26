import { connect } from "react-redux";
import Signin from "./Signin";
import { SiginPresenter, SigninItem } from "./SigninInterfaces";

const signinItem: SigninItem = {
  keySigninLabelUsername: "signinLabelUsername",
  keySigninPlaceholderUsername: "signinPlaceholderUsername",
  keySigninLabelPassword: "signinLabelPassword",
  keySigninPlaceholderPassword: "signinPlaceholderPassword",
  keyRemember: "remember",
  keyForgotPassword: "forgotPassword",
  keySigninSubmit: "signinSubmit",
  keySignupAccount: "signupAccount",
  keySignupButton: "signupButton",
  keyimagePath:"assets/images/signin/signin-img.jpg"
};

const signinPresenter: SiginPresenter = {
  keySigninHeader: "signinHeader",
  signinItem: signinItem
};

export const signinReducer = (state: SiginPresenter = signinPresenter) => {
  return state;
};

const mapStateToProps = (state: any) => ({
  signinPresenter: state.signinReducer
});

export default connect(mapStateToProps)(Signin);
