export interface ErrorField {
	email: string;
	password: string;
	firstName: string;
	lastName: string;
	confirmEmail: string;
	confirmPassword: string;
	companyName1: string;
	companyName2: string;
	companyName3: string;
	registrationNumber: string;
	addressNumber: string;
	village: string;
	road: string;
	province: string;
	district: string;
	subDistrict: string;
	zipCode: string;
	auditorLicense: string;
	auditorName: string;
}

export const regexExpression = {
	regexEmail: new RegExp(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i),
	regexText: new RegExp(/^[a-zA-Z0-9ก-๙]*$/),
	regexTextOrWhiteSpace: new RegExp(/^[a-zA-Z0-9ก-๙]*$/),
	regexPassword: new RegExp(/^[a-zA-Z0-9]{5,}$/)
};