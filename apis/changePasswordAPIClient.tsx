import { Dispatch } from "redux";
import service from './baseAPIs';
import { KeyManager } from '../manager/keyManager';

export enum changePasswordAction {
    changePassword_Success = 'changePassword_Success',
    changePassword_Failed = 'changePassword_Failed'
}

export const changePassword: any = (password: string) => async (dispatch: Dispatch
) => {
    service({
        method: 'post',
        url: `password_reset_confirm/verfication_key/pk_id`,
        data: params(password)
    })
        .then((response) => {

            if (response) {
                dispatch({
                    type: changePasswordAction.changePassword_Success,
                    keyMessage: response.data[KeyManager.Message]
                });
            }
        })

        .catch((error) => {

            if (error) {
                dispatch({
                    type: changePasswordAction.changePassword_Failed,
                    keyMessage: error.response.data[KeyManager.Message]
                });
            }
        });
};

const params = (password: string) => {
    return {
        new_password: password
    }
};