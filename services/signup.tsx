import Router from 'next/router';
import service from './baseService';

export const sendDataSignup = (dataSignup, message) => {
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
