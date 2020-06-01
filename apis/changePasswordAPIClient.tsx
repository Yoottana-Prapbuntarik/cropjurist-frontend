import { Dispatch } from "redux";
import { serviceResetPassword } from './baseAPIs';
import  { KeyManager }  from '../manager/keyManager';

export enum changePasswordAction {
    changePassword_Success = 'changePassword_Success',
    changePassword_Failed = 'changePassword_Failed'
}

export const changePassword: any = (password: string, tokenID: string, uuId: string) => async (dispatch: Dispatch
) => {
    const url = `password_reset_confirm/${tokenID}/${uuId}/`;

    serviceResetPassword({
        method: 'post',
        url: url,
        data: params(password)
    })

        .then((response) => {

            if (response) {
                dispatch({
                    type: changePasswordAction.changePassword_Success,
                    keyMessage: response.data.Message
                });
            }
        })

        .catch((error) => {

            if (error) {
                dispatch({
                    type: changePasswordAction.changePassword_Failed,
                    keyMessage: KeyManager.ChangePasswordFaled
                });
            }
        });
};

const params = (password: string) => {
    return {
        new_password: password
    }
};