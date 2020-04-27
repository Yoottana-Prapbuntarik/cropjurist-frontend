import { regexExpression } from '../interfaceValidator';
import { KeyManager } from '../../manager/keyManager';

export const emailValidator = (email: string) => {
	if (isEmail(email)) {
		return {
			status: true,
			keyMessage: null
		};
	}

	return {
		status: false,
		keyMessage: KeyManager.EmailInvalid
	};
};

export const emailMatchingValidator = (email: string, confirmEmail: string) => {
	if (isMatching(email, confirmEmail)) {
		return {
			status: true,
			keyMessage: null
		};
	}

	return {
		status: false,
		keyMessage: KeyManager.EmailDoesNotMatch
	};
};

const isEmail = (email: string) => {
	return regexExpression.regexEmail.test(email);
};

const isMatching = (email: string, confirmEmail: string) => {
	return email === confirmEmail;
};
