import Signup from '../Signup/Signup';
import { reduxForm } from 'redux-form';
import { SignupPresenter, SingupItemsInputform, MessageForm } from '../Signup/SignupInterface';
import { connect } from 'react-redux';
import { withTranslation } from '../../i18n';
import { FormManager } from '../../manager/formManager';

import validate from '../../validator/SignupValidator/SignupValidator';

const signupItemsInputform: SingupItemsInputform = {
	keyPlaceholderFirstNameSignup: 'placeholderFirstNameSignup',
	keyPlaceholderLastNameSignup: 'placeholderLastNameSignup',
	keyPlaceholderEmailSignup: 'placeholderEmailSignup',
	keyPlaceholderReEnterEmailSignup: 'placeholderReEnterEmailSignup',
	keyPlaceholderPasswordSignup: 'labelPassword',
	keyPlaceholderConfirmPasswordSignup: 'placeholderConfirmPasswordSignup',
	keySubmitSignup: 'submitSignup',
	keyHaveAccount: 'haveAccount',
	keySigninAccount: 'signinAccount',
	keyimagePath: 'assets/images/signup/signup-img.jpg'
};

const messageForm: MessageForm = {
	keyFirstnameErrorMessage: 'firstNameErrorMessage',
	keyLastnameErrorMessage: 'lastNameErrorMessage',
	keyEmailErrorMessage: 'emailErrorMessage',
	keyConfirmEmailErrorMessage: 'conFirmEmailErrorMessage',
	keyPasswordErrorMessage: 'passwordErrorMessage',
	keyConfirmPasswordErrorMessage: 'conFirmPasswordErrorMessage',
	keyIsSignup: 'isSignup',
	keySignup: 'notSignup'
};

const signupPresenter: SignupPresenter = {
	keySignupHeader: 'signup',
	signupItemInputform: signupItemsInputform,
	messageForm: messageForm
};

export const signupReducer = (state: SignupPresenter = signupPresenter) => {
	return state;
};

const mapStateToProps = (state: any) => ({
	signupPresenter: state.signupReducer
});

export default withTranslation('common')(
	connect(mapStateToProps)(reduxForm({ form: FormManager.SignupForm, validate })(Signup))
);
