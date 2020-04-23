import { connect } from "react-redux";
import { reduxForm } from "redux-form";
import { withTranslation } from "../../i18n";
import validate from "../../Validated/SigninValidator/SigninValidator";
import Signin from "./Signin";
import { SiginPresenter, SigninItem, MessageForm } from "./SigninInterfaces";

const signinItem: SigninItem = {
  keySigninLabelUsername: "labelUsername",
  keySigninPlaceholderUsername: "labelUsername",
  keySigninLabelPassword: "labelPassword",
  keySigninPlaceholderPassword: "labelPassword",
  keyRemember: "remember",
  keyForgotPassword: "forgotPassword",
  keySigninSubmit: "signinSubmit",
  keySignupAccount: "signupAccount",
  keySignupButton: "signup",
  keyimagePath: "assets/images/signin/signin-img.jpg",
};

const messageForm: MessageForm = {
  keyEmailErrorMessage: "emailErrorMessage",
  keyPasswordErrorMessage: "passwordErrorMessage",
  keyIsSignin: "isSignin",
  keySignin: "userSignin",
};
const signinPresenter: SiginPresenter = {
  keySigninHeader: "signin",
  signinItem: signinItem,
  messageForm: messageForm,
};

export const signinReducer = (state: SiginPresenter = signinPresenter) => {
  return state;
};

const mapStateToProps = (state: any) => ({
  signinPresenter: state.signinReducer,
});

export default withTranslation("common")(
  connect(mapStateToProps)(reduxForm({ form: "SigninForm", validate })(Signin))
);