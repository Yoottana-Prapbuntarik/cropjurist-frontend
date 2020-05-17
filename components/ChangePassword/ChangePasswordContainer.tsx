import { connect } from 'react-redux';
import ChangePassword from './ChangePassword';
import { reduxForm, reset } from 'redux-form';
import validate from '../../validate/changePasswordValidator/changePasswordValidator';
import { ChangePasswordPresenter } from './ChangePasswordInterface';
import { FormManager } from '../../manager/formManager';
import { changePassword, changePasswordAction } from '../../apis/changePasswordAPIClient';
import { withTranslation } from '../../i18n';
import { Dispatch } from 'redux';

const changePasswordPresenter: ChangePasswordPresenter = {
    keyTitleChangePassword: "titleChangePassword",
    keyNewPassword: "newPassword",
    keyConfirmNewPassword: "placeholderConfirmPasswordSignup",
    keySubmitResetPassword: "changePassword",
    keyImagePath: '../../assets/images/changepassword/changepassword.jpg'
}

export const changePasswordReducer = (state: ChangePasswordPresenter = changePasswordPresenter, action: any) => {
    switch (action.type) {
        case changePasswordAction.changePassword_Success:
            return state;
        case changePasswordAction.changePassword_Failed:
            return state;
        default:
            return state;
    }
}

const mapStateToProps = (state: any) => ({
    changePasswordPresenter: state.changePasswordReducer
})

const mapDispatchToProps = (dispatch: Dispatch) => ({
    changePassword: (event: any) => {
        dispatch(changePassword(event.password));
        dispatch(reset(FormManager.ChangePasswordForm));
    }
});

const form = reduxForm({ form: FormManager.ChangePasswordForm, validate })(ChangePassword);

export default withTranslation("common")(connect(mapStateToProps, mapDispatchToProps)(form));