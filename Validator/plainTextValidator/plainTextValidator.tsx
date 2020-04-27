import { regexExpression } from '../interfaceValidator';
import { KeyManager } from '../../manager/keyManager';

export enum Field {
	FirstName = 'FirstName',
	LastName = 'LastName'
}

export const plainTextValidator = (text: string, field: Field) => {
	if (isPlainText(text)) {
		return {
			status: true,
			keyMessage: null
		};
	}

	return {
		status: false,
		keyMessage: keyErrorMessage(field)
	};
};

const keyErrorMessage = (field: Field) => {
	switch (field) {
		case Field.FirstName:
			return KeyManager.FirstNameInValid;
		case Field.LastName:
			return KeyManager.LastNameInValid;
		default:
			return null;
	}
};

const isPlainText = (text: string) => {
	return regexExpression.regexText.test(text) && text !== undefined;
};
