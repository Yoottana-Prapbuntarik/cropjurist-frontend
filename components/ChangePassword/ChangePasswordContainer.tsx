import { connect } from 'react-redux';
import ChangePassword from './ChangePassword';
import { reduxForm, reset } from 'redux-form';
import validate from '../../validator/changePasswordValidator/changePasswordValidator';
import { ChangePasswordPresenter } from './ChangePasswordInterface';
import { FormManager } from '../../manager/formManager';
import { changePassword } from '../../apis/changePasswordAPIClient';
import { withTranslation } from '../../i18n';
import { Dispatch } from 'redux';

const changePasswordPresenter: ChangePasswordPresenter = {
    keyTitleChangePassword: "titleChangePassword",
    keyNewPassword: "newPassword",
    keyConfirmNewPassword: "placeholderConfirmPasswordSignup",
    keySubmitResetPassword: "changePassword",
    keyImagePath: 'assets/images/changepassword/changepassword.jpg'
}

export const changePasswordReducer = (state: ChangePasswordPresenter = changePasswordPresenter) => {
    return state;
}

const mapStateToProps = (state: any) => ({
    changePasswordPresenter: state.changePasswordReducer
})

const mapDispatchToProps = (dispatch: Dispatch) => ({
    submitSignin: (event: any) => {
        dispatch(changePassword(event.password));
        dispatch(reset(FormManager.SigninForm));
    }
});

const form = reduxForm({ form: FormManager.ChangePasswordForm, validate })(ChangePassword);

export default withTranslation("common")(connect(mapStateToProps, mapDispatchToProps)(form));