import { Dispatch } from "redux";

export enum changePasswordAction {
    changePassword_Success = 'changePassword_Success',
    changePassword_Failed = 'changePassword_Failed'
}

export const changePassword: any = (password: string) => async (dispatch: Dispatch
    ) => {      
        if (password !== undefined) {
            dispatch({
                type: changePasswordAction.changePassword_Success
            })

        } else {
            dispatch({
                type: changePasswordAction.changePassword_Failed
            })
        }
};