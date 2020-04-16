import { FormErrors } from "redux-form";
import { ErrorField, regexExpression } from "../InterfaceValidator";

const validate = (dataSignup, { signupPresenter, t }: any): FormErrors => {

  let errors: FormErrors<ErrorField> = {};

  if (!regexExpression.regexText.test(dataSignup.firstname) ||
      !dataSignup.firstname) {
      errors.firstname = t(signupPresenter.messageForm.keyFirstnameErrorMessage);
  }
  if (!regexExpression.regexText.test(dataSignup.lastname) ||
      !dataSignup.lastname) {
      errors.lastname = t(signupPresenter.messageForm.keyLastnameErrorMessage);
  }
  if (!regexExpression.regexEmail.test(dataSignup.email) || 
      !dataSignup.email) {
      errors.email = t(signupPresenter.messageForm.keyEmailErrorMessage);
  }

  if (dataSignup.confirmEmail !== dataSignup.email) {
      errors.confirmEmail = t(signupPresenter.messageForm.keyConfirmEmailErrorMessage);
  }

  if (!regexExpression.regexPassword.test(dataSignup.password) ||
      !dataSignup.password) {
    errors.password = t(signupPresenter.messageForm.keyPasswordErrorMessage);
  }

  if (dataSignup.confirmPassword !== dataSignup.password) {
      errors.confirmPassword = t(signupPresenter.messageForm.keyConfirmPasswordErrorMessage);
  }

  return errors;
};

export default validate;
