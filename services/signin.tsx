// import Router from 'next/router';
import service from './baseService';
import { Dispatch } from 'redux';

export enum SigninAction {
	Signin_Success = 'Signin_Success',
	Signin_Failed = 'Signin_Failed'
}

export const signin: any = (dataSignin: any) => async (dispatch: Dispatch) => {
	service({
		method: 'post',
		url: 'user/login/',
		data: dataSignin
	})
		.then((response) => {
			if (response) {
				dispatch({
					type: SigninAction.Signin_Success,
					keyMessage: 'isSignin'
				});
			}
			// Router.push('/member');
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
