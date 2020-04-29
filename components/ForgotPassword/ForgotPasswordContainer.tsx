import { connect } from 'react-redux';
import { reduxForm, reset } from 'redux-form';
import { ForgotAction, fotgotPassword } from '../../apis/forgotPasswordAPIClient';
import { withTranslation, i18n } from '../../i18n';
import { ForgotPassworPresenter } from './ForgotPasswordInterface';
import { Dispatch } from 'redux';
import { FormManager } from '../../manager/formManager';
import ForgotPassword from './ForgotPassword';
import validate from '../../validator/ForgotPasswordValidator/ForgotPassword';

const forgotPassworPresenter: ForgotPassworPresenter = {
    keyEmail: "email",
    keyHeader: "forgotHeader",
    keySubtitle: "forgotySubtitle",
    keyButtonName: "btnForgot",
	keyBackToLogin: "backToLogin",
	keyimagePath: '/assets/images/forgotpassword/forgotpassword.jpg'
}

export const ForgotPasswordReducer = (state: ForgotPassworPresenter = forgotPassworPresenter, action: any) => {
	switch (action.type) {
		case ForgotAction.ResetPassword_Success:
			alert(i18n.t(action.keyMessage));
			return state;
			case ForgotAction.ResetPassword_Failed:
				alert(i18n.t(action.keyMessage));
			return state;
		default:
			return state;
}};

const mapStateToProps = (state: any) => ({
	forgotPassworPresenter: state.ForgotPasswordReducer
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
	submitResetPassword: (event: any) => {
		dispatch(fotgotPassword(event.email));
		dispatch(reset(FormManager.ForgotForm));
	}
});

const form = reduxForm({ form: FormManager.ForgotForm, validate })(ForgotPassword);

export default withTranslation('common')(connect(mapStateToProps, mapDispatchToProps)(form));