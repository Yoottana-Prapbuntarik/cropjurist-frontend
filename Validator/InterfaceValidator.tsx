export interface ErrorField {
	email: string;
	password: string;
	firstName: string;
	lastName: string;
	confirmEmail: string;
	confirmPassword: string;
}

export const regexExpression = {
	regexEmail: new RegExp(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i),
	regexText: new RegExp(/^[a-zA-Z0-9ก-๙]*$/),
	regexPassword: new RegExp(/^[a-zA-Z0-9]{5,}$/)
};
