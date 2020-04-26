import Router from 'next/router';
import service from './baseService';

export const sendDataSignin = (dataSignin: any, message: any) => {
	service({
		method: 'post',
		url: 'user/login/',
		data: dataSignin
	})
		.then((response) => {
			if (response) alert(message.success);
			Router.push('/member');
		})
		.catch((error) => {
			if (error) alert(message.failed);
		});
};
