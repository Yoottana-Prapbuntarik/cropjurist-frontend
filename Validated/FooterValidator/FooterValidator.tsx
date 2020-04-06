import { FormErrors } from "redux-form";
import {ErrorField } from "../InterfaceValidator";

const validate = (email,{ footerPresenter, t }: any
): FormErrors => {
  let regexEmail: RegExp = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
  let errors: FormErrors<ErrorField> = {};
  if (!email.email) {
    errors.email = t(footerPresenter.errorMessageForm.keyEmailErrorMessage);
  } else if (!regexEmail.test(email.email)) {
    errors.email = t(footerPresenter.errorMessageForm.keyEmailErrorMessage);
  }
  return errors;
};

export default validate;
