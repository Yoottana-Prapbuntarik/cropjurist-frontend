import Signup from "../Signup/Signup";
import { reduxForm } from "redux-form";
import validate from '../../Validated/SignupValidator/SignupValidator';
import {
  SignupPresenter,
  SingupItemsInputform,
  ErrorMessageForm,
} from "../Signup/SignupInterface";
import { connect } from "react-redux";
import { withTranslation } from "../../i18n";

const signupItemsInputform: SingupItemsInputform = {
  keyPlaceholderFirstNameSignup: "placeholderFirstNameSignup",
  keyPlaceholderLastNameSignup: "placeholderLastNameSignup",
  keyPlaceholderEmailSignup: "placeholderEmailSignup",
  keyPlaceholderReEnterEmailSignup: "placeholderReEnterEmailSignup",
  keyPlaceholderPasswordSignup: "placeholderPasswordSignup",
  keyPlaceholderConfirmPasswordSignup: "placeholderConfirmPasswordSignup",
  keySubmitSignup: "submitSignup",
  keyHaveAccount: "haveAccount",
  keySigninAccount: "signinAccount",
  keyimagePath: "assets/images/signup/signup-img.jpg",
};

const errorMessageForm: ErrorMessageForm = {
  keyFirstnameErrorMessage: "firstNameErrorMessage",
  keyLastnameErrorMessage: "lastNameErrorMessage",
  keyEmailErrorMessage: "emailErrorMessage",
  keyConfirmEmailErrorMessage: "conFirmEmailErrorMessage",
  keyPasswordErrorMessage: "passwordErrorMessage",
  keyConfirmPasswordErrorMessage: "conFirmPasswordErrorMessage",
};
const signupPresenter: SignupPresenter = {
  keySignupHeader: "signupHeader",
  signupItemInputform: signupItemsInputform,
  errorMessageForm: errorMessageForm,
};

export const signupReducer = (state: SignupPresenter = signupPresenter) => {
  return state;
};

const mapStateToProps = (state: any) => ({
  signupPresenter: state.signupReducer,
});

export default withTranslation("common")(
  connect(mapStateToProps)(reduxForm({ form: "SignupForm",validate })(Signup))
);
