import Signup from "../Signup/Signup";
import {
  SignupPresenter,
  SingupItemsInputform
} from "../Signup/SignupInterface";
import { connect } from "react-redux";

const signupItemInputform: SingupItemsInputform = {
  keyPlaceholderFirstNameSignup: "placeholderFirstNameSignup",
  keyPlaceholderLastNameSignup: "placeholderLastNameSignup",
  keyPlaceholderEmailSignup: "placeholderEmailSignup",
  keyPlaceholderReEnterEmailSignup:"placeholderReEnterEmailSignup",
  keyPlaceholderPasswordSignup: "placeholderPasswordSignup",
  keyPlaceholderConfirmPasswordSignup: "placeholderConfirmPasswordSignup",
  keySubmitSignup: "submitSignup",
  keyHaveAccount: "haveAccount",
  keySigninAccount: "signinAccount"
};

const signupPresenter: SignupPresenter = {
  keySignupHeader: "signupHeader",
  signupItemInputform: signupItemInputform
};

export const signupReducer = (state: SignupPresenter = signupPresenter) => {
  return state;
};

const mapStateToProps = (state: any) => ({
  signupPresenter: state.signupReducer
});

export default connect(mapStateToProps)(Signup);
