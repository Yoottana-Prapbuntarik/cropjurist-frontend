import { FormErrors } from 'redux-form';
import { ErrorField } from '../InterfaceValidator';
import { emailValidator } from '../emailValidator/emailValidator';

const validate = (signinInformation: any, { t }: any): FormErrors => {
	let errors: FormErrors<ErrorField> = {};
	let emailValidatorResult = emailValidator(signinInformation.email);
	if (!emailValidatorResult.status) {
		errors.email = t(emailValidatorResult.keyMessage);
	}
	return errors;
};

export default validate;