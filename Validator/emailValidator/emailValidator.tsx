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

const isEmail = (email: string) => {
	return regexExpression.regexEmail.test(email);
};
