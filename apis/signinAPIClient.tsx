import service from './baseAPIs';
import { Dispatch } from 'redux';

export enum SigninAction {
	Signin_Success = 'Signin_Success',
	Signin_Failed = 'Signin_Failed'
}

export const signin: any = (email: string, password: string, isRemember?: boolean) => async (dispatch: Dispatch) => {
	service({
		method: 'post',
		url: 'user/login/',
		data: params(email, password, isRemember)
	})
		.then((response) => {
			if (response) {
				dispatch({
					type: SigninAction.Signin_Success,
					keyMessage: 'isSignin'
				});
			}
		})
		.catch((error) => {
			if (error) {
				dispatch({
					type: SigninAction.Signin_Failed,
					keyMessage: 'userSignin'
				});
			}
		});
};

const params = (email: string, password: string, isRemember?: boolean) => {
	if (isRemember == undefined) {
		return {
			email: email,
			password: password
		};
	}

	return {
		email: email,
		password: password,
		is_remember: isRemember
	};
};
