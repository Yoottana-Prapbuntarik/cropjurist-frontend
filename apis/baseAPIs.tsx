import axios from 'axios';

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