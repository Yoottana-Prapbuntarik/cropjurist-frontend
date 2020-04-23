import Router from 'next/router';
import axios from 'axios';

export const sendDataSignin = (dataSignin, message) => {
	axios({
		method: 'post',
		url: 'http://34.87.56.93/api/v1/user/login/',
		data: dataSignin,
		headers: {
			'content-type': 'application/json'
		}
	})
		.then((response) => {
			if (response) alert(message.success);
			Router.push('/member');
		})
		.catch((error) => {
			if (error) alert(message.failed);
		});
};
