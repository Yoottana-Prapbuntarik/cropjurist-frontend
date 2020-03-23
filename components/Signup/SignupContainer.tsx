import Signup from "../Signup/Signup";
import {
  SignupPresenter,
  SingupItemsInputform
} from "../Signup/SignupInterface";
import { connect } from "react-redux";

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
  keyimagePath: "assets/images/signup/signup-img.jpg"
};

const signupPresenter: SignupPresenter = {
  keySignupHeader: "signupHeader",
  signupItemInputform: signupItemsInputform
};

export const signupReducer = (state: SignupPresenter = signupPresenter) => {
  return state;
};

const mapStateToProps = (state: any) => ({
  signupPresenter: state.signupReducer
});

export default connect(mapStateToProps)(Signup);
