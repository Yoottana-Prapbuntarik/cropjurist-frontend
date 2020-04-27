import { regexExpression } from '../interfaceValidator';
import { KeyManager } from '../../manager/keyManager';

export const passwordValidator = (password: string) => {
	if (isPassword(password)) {
		return {
			status: true,
			keyMessage: null
		};
	}

	return {
		status: false,
		keyMessage: KeyManager.PasswordInvalid
	};
};

const isPassword = (password: string) => {
	return regexExpression.regexPassword.test(password);
};
