import Router from 'next/router';
import service from './baseAPIs';

export const sendDataSignup = (dataSignup: any, message: any) => {
	service({
		method: 'post',
		url: 'user/register/',
		data: dataSignup
	})
		.then((response) => {
			if (response) alert(message.success);
			Router.push('/signin');
		})
		.catch((error) => {
			if (error) alert(message.failed);
		});
};
