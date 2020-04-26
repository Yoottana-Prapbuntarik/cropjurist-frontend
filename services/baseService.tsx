import axios from 'axios';

const productionURL = 'https://corpjurist.com/api/v1/';
// const devURL = 'https://dev.corpjurist.com/api/v1/';

const service = axios.create({
	baseURL: productionURL,
	headers: { 'content-type': 'application/json' }
});

export default service;
