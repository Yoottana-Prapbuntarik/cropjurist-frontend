import axios from 'axios';
import join from 'url-join'

// const productionURL = 'https://corpjurist.com/api/v1/';
const devURL = 'https://dev.corpjurist.com/api/v1/';
const devURLResetPassword = 'https://dev.corpjurist.com/api/';
const service = axios.create({
	baseURL: devURL,
	headers: { 'content-type': 'application/json' }
});

export default service;

export const serviceResetPassword = axios.create({
	baseURL: devURLResetPassword,
	headers: { 'content-type': 'application/json' }
});

axios.interceptors.request.use(async (config) => {
	const token = localStorage.getItem("access-token");
	if (token != null) {
		config.headers = { 
			'Content-Type': 'application/json',
			'Authorization': 'Token '+token,
		 }
	}
	config.url = join(devURL, config.url)
	return config;
})

export const serviceSetToken = axios;