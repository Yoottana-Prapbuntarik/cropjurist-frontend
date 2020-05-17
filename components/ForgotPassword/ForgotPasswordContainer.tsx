import { connect } from 'react-redux';
import { reduxForm, reset } from 'redux-form';
import { ForgotAction, fotgotPasswordForm } from '../../apis/forgotPasswordAPIClient';
import { withTranslation, i18n } from '../../i18n';
import { ForgotPasswordPresenter } from './ForgotPasswordInterface';
import { Dispatch } from 'redux';
import { FormManager } from '../../manager/formManager';
import ForgotPassword from './ForgotPassword';
import validate from '../../testvalidate/forgotPassword/forgotPasswordValidator';

const forgotPasswordPresenter: ForgotPasswordPresenter = {
	keyEmail: 'email',
	keyHeader: 'forgotHeader',
	keySubtitle: 'forgotySubtitle',
	keyButtonName: 'buttonForgotPassword',
	keyBackToLogin: 'backToLogin',
	keyImagePath: 'assets/images/forgotpassword/forgotpassword.jpg'
};

export const forgotPasswordReducer = (state: ForgotPasswordPresenter = forgotPasswordPresenter, action: any) => {
	switch (action.type) {
		case ForgotAction.ResetPassword_Success:
			alert(i18n.t(action.keyMessage));
			return state;
		case ForgotAction.ResetPassword_Failed:
			alert(i18n.t(action.keyMessage));
			return state;
		default:
			return state;
	}
};

const mapStateToProps = (state: any) => ({
	forgotPasswordPresenter: state.forgotPasswordReducer
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
	submitResetPassword: (event: any) => {
		dispatch(fotgotPasswordForm(event.email));
		dispatch(reset(FormManager.ForgotPasswordForm));
	}
});

const form = reduxForm({ form: FormManager.ForgotPasswordForm, validate })(ForgotPassword);

export default withTranslation('common')(connect(mapStateToProps, mapDispatchToProps)(form));
