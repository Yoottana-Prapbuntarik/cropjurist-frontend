import { FormErrors } from "redux-form";
import { ErrorField } from "../InterfaceValidator";

const validate = (data, { signupPresenter, t }: any): FormErrors => {
  let regexEmail: RegExp = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
  let WhiteSpace = new RegExp(/^\s+$/);
  let errors: FormErrors<ErrorField> = {};
  if (data.name === undefined || data.name.length < 1) {
    errors.name = t(signupPresenter.errorMessageForm.keyFirstnameErrorMessage);
  } else if (data.lastname === undefined || data.lastname.length < 1) {
    errors.lastname = t(
      signupPresenter.errorMessageForm.keyLastnameErrorMessage
    );
  } else if (!data.email) {
    errors.email = t(signupPresenter.errorMessageForm.keyEmailErrorMessage);
  } else if (!regexEmail.test(data.email)) {
    errors.email = t(signupPresenter.errorMessageForm.keyEmailErrorMessage);
  } else if (!data.confirmEmail) {
    errors.confirmEmail = t(
      signupPresenter.errorMessageForm.keyConfirmEmailErrorMessage
    );
  } else if (data.confirmEmail !== data.email) {
    errors.confirmEmail = t(
      signupPresenter.errorMessageForm.keyConfirmEmailErrorMessage
    );
  } else if (
    data.password === undefined ||
    data.password.length < 5 ||
    WhiteSpace.test(data.password)
  ) {
    errors.password = t(
      signupPresenter.errorMessageForm.keyPasswordErrorMessage
    );
  } else if (
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
