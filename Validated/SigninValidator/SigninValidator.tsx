import { FormErrors } from "redux-form";
import { ErrorField, regexExpression } from "../InterfaceValidator";

const validate = (dataSignin, { signinPresenter, t }: any): FormErrors => {
  let errors: FormErrors<ErrorField> = {};
  if (!regexExpression.regexEmail.test(dataSignin.email) || 
      !dataSignin.email) {
      errors.email = t(signinPresenter.messageForm.keyEmailErrorMessage);
  }
  if (!regexExpression.regexPassword.test(dataSignin.password) || 
      !dataSignin.password) {
      errors.password = t(signinPresenter.messageForm.keyPasswordErrorMessage)
      }
  return errors;
};

export default validate;
