import { FormErrors } from "redux-form";
import { ErrorField, regexExpression } from "../InterfaceValidator";

  const validate = (emailSubscribe, { footerPresenter, t }: any): FormErrors => {
  let errors: FormErrors<ErrorField> = {};
  if (!regexExpression.regexEmail.test(emailSubscribe.email) ||
      !emailSubscribe.email
  ) {
    errors.email = t(footerPresenter.messageForm.keyEmailErrorMessage);
  }
  return errors;
};

export default validate;