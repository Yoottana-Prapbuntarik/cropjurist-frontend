import { connect } from "react-redux";
import { reduxForm } from "redux-form";
import { withTranslation } from "../../i18n";
import validate from '../../Validated/SigninValidator/SigninValidator';
import Signin from "./Signin";
import { SiginPresenter, SigninItem, ErrorMessageForm } from "./SigninInterfaces";

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
  keyimagePath: "assets/images/signin/signin-img.jpg",
};

const errorMessageForm: ErrorMessageForm = {
  keyEmailErrorMessage: "emailErrorMessage",
  keyPasswordErrorMessage:"passwordErrorMessage",
};
const signinPresenter: SiginPresenter = {
  keySigninHeader: "signinHeader",
  signinItem: signinItem,
  errorMessageForm: errorMessageForm,
};

export const signinReducer = (state: SiginPresenter = signinPresenter) => {
  return state;
};

const mapStateToProps = (state: any) => ({
  signinPresenter: state.signinReducer,
});

export default withTranslation("common")(
  connect(mapStateToProps)(reduxForm({form:'SigninForm',validate})(Signin))
);
