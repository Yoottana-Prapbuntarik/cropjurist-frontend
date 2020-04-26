import { connect } from 'react-redux';
import { reduxForm, reset } from 'redux-form';
import { withTranslation, i18n } from '../../i18n';
import { SiginPresenter, SigninItem, MessageForm } from './SigninInterfaces';
import { signin, SigninAction } from '../../services/signin';
import { Dispatch } from 'redux';

import validate from '../../Validated/SigninValidator/SigninValidator';
import Signin from './Signin';

const signinItem: SigninItem = {
	keySigninLabelUsername: 'labelUsername',
	keySigninPlaceholderUsername: 'labelUsername',
	keySigninLabelPassword: 'labelPassword',
	keySigninPlaceholderPassword: 'labelPassword',
	keyRemember: 'remember',
	keyForgotPassword: 'forgotPassword',
	keySigninSubmit: 'signinSubmit',
	keySignupAccount: 'signupAccount',
	keySignupButton: 'signup',
	keyimagePath: 'assets/images/signin/signin-img.jpg'
};

const messageForm: MessageForm = {
	keyEmailErrorMessage: 'emailErrorMessage',
	keyPasswordErrorMessage: 'passwordErrorMessage'
};

const signinPresenter: SiginPresenter = {
	keySigninHeader: 'signin',
	signinItem: signinItem,
	messageForm: messageForm
};

export const signinReducer = (state: SiginPresenter = signinPresenter, action: any) => {
	switch (action.type) {
		case SigninAction.Signin_Success:
			alert(i18n.t(action.keyMessage));
			return state;
		case SigninAction.Signin_Failed:
			alert(i18n.t(action.keyMessage));
			return state;
		default:
			return state;
	}
};

const mapStateToProps = (state: any) => ({
	signinPresenter: state.signinReducer
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
	submitSignin: (event: any) => {
		let dataSingin: any = {
			email: event.email,
			password: event.password,
			is_remember: event.checkbox
		};

		dispatch(signin(dataSingin));
		dispatch(reset('SigninForm'));
	}
});

const form = reduxForm({ form: 'SigninForm', validate })(Signin);

export default withTranslation('common')(connect(mapStateToProps, mapDispatchToProps)(form));
