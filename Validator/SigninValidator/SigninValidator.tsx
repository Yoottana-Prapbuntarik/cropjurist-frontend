import { FormErrors } from 'redux-form';
import { ErrorField, regexExpression } from '../InterfaceValidator';
import { KeyManager } from '../../manager/keyManager';

const validate = (signinInformation: any, { t }: any): FormErrors => {
	let errors: FormErrors<ErrorField> = {};

	if (isEmail(signinInformation.email)) {
		errors.email = t(KeyManager.EmailInvalid);
	}

	if (isPassword(signinInformation.password)) {
		errors.password = t(KeyManager.PasswordInvalid);
	}

	return errors;
};

const isEmail = (email: string) => {
	return !regexExpression.regexEmail.test(email) || !email;
};

const isPassword = (password: string) => {
	return !regexExpression.regexPassword.test(password) || !password;
};

export default validate;
