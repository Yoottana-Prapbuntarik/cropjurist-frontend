import { FormErrors } from "redux-form";
import { ErrorField } from "../InterfaceValidator";

const validate = (data,{ signinPresenter, t }: any
): FormErrors => {
  let regexEmail: RegExp = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
  let errors: FormErrors<ErrorField> = {};
  if (!data.email) {
    errors.email = t(signinPresenter.errorMessageForm.keyEmailErrorMessage);
  } else if (!regexEmail.test(data.email)) {
    errors.email = t(signinPresenter.errorMessageForm.keyEmailErrorMessage);
  }
  else if(data.password === undefined || data.password.length < 5){
    errors.password = t(signinPresenter.errorMessageForm.keyPasswordErrorMessage)
  }
  return errors;
};

export default validate;
