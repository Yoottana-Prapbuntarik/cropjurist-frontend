import { connect } from 'react-redux';
import ChangePassword from './ChangePassword';
import { reduxForm, reset } from 'redux-form';
import validate from '../../validate/changePasswordValidator/changePasswordValidator';
import { ChangePasswordPresenter } from './ChangePasswordInterface';
import { FormManager } from '../../manager/formManager';
import { changePassword, changePasswordAction } from '../../apis/changePasswordAPIClient';
import { withTranslation, i18n } from '../../i18n';
import { Dispatch } from 'redux';
import Router from 'next/router';
import { routeToSignin } from '../../manager/routerManager';

const changePasswordPresenter: ChangePasswordPresenter = {
    keyTitleChangePassword: "titleChangePassword",
    keyNewPassword: "newPassword",
    keyConfirmNewPassword: "placeholderConfirmPasswordSignup",
    keySubmitResetPassword: "changePassword",
    keyImagePath: '../../../assets/images/changepassword/changepassword.jpg'
}

export const changePasswordReducer = (state: ChangePasswordPresenter = changePasswordPresenter, action: any) => {
    switch (action.type) {
        case changePasswordAction.changePassword_Success:
            alert(i18n.t(action.keyMessage));
            Router.push(routeToSignin);
            return state;
        case changePasswordAction.changePassword_Failed:
            alert(i18n.t(action.keyMessage));
            Router.push(routeToSignin);
            return state;
        default:
            return state;
    }
}

const mapStateToProps = (state: any) => ({
    changePasswordPresenter: state.changePasswordReducer
})

const mapDispatchToProps = (dispatch: Dispatch, ownProps: any) => ({
    changePassword: (event: any) => {
        dispatch(changePassword(event.password, ownProps.tokenID, ownProps.uuId));
        dispatch(reset(FormManager.ChangePasswordForm));
    }
});

const form = reduxForm({ form: FormManager.ChangePasswordForm, validate })(ChangePassword);

export default withTranslation("common")(connect(mapStateToProps, mapDispatchToProps)(form));