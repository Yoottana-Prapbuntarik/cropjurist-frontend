import service from './baseAPIs';
import { Dispatch } from 'redux';

export enum SignupAction {
	Signup_Success = 'Signup_Success',
	Signup_Failed = 'Signin_Failed'
}

export const signup: any = (firstName: string, lastName: string, email: string, password: string) => async (
	dispatch: Dispatch
) => {
	service({
		method: 'post',
		url: 'user/register/',
		data: params(firstName, lastName, email, password)
	})

		.then((response) => {
			if (response) {
				console.log(response);
				dispatch({
					type: SignupAction.Signup_Success,
					keyMessage: 'isSignup'
				});
			}
		})
		
		.catch((error) => {
			if (error) {
				dispatch({
					type: SignupAction.Signup_Failed,
					keyMessage: error.response.data.email[0]
				});
			}
		});
};

const params = (firstName: string, lastName: string, email: string, password: string) => {
	return {
		first_name: firstName,
		last_name: lastName,
		email: email,
		password: password
	};
};