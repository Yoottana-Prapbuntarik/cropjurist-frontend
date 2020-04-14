import { FormErrors } from "redux-form";
import { ErrorField } from "../InterfaceValidator";

const validate = (data, { signupPresenter, t }: any): FormErrors => {
  let regexEmail: RegExp = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
  let WhiteSpace = new RegExp(/^\s+$/);
  let errors: FormErrors<ErrorField> = {};
  if (data.firstname === undefined || data.firstname.length < 1) {
    errors.firstname = t(
      signupPresenter.errorMessageForm.keyFirstnameErrorMessage
    );
  }
  if (data.lastname === undefined || data.lastname.length < 1) {
    errors.lastname = t(
      signupPresenter.errorMessageForm.keyLastnameErrorMessage
    );
  }
  if (!data.email) {
    errors.email = t(signupPresenter.errorMessageForm.keyEmailErrorMessage);
  }
  if (!regexEmail.test(data.email)) {
    errors.email = t(signupPresenter.errorMessageForm.keyEmailErrorMessage);
  }
  if (!data.confirmEmail) {
    errors.confirmEmail = t(
      signupPresenter.errorMessageForm.keyConfirmEmailErrorMessage
    );
  }
  if (data.confirmEmail !== data.email) {
    errors.confirmEmail = t(
      signupPresenter.errorMessageForm.keyConfirmEmailErrorMessage
    );
  }
  if (
    data.password === undefined ||
    data.password.length < 5 ||
    WhiteSpace.test(data.password)
  ) {
    errors.password = t(
      signupPresenter.errorMessageForm.keyPasswordErrorMessage
    );
  }
  if (
    data.confirmPassword === undefined ||
    data.confirmPassword.length < 5 ||
    data.confirmPassword !== data.password
  ) {
    errors.confirmPassword = t(
      signupPresenter.errorMessageForm.keyConfirmPasswordErrorMessage
    );
  }
  return errors;
};

export default validate;
