import { FormErrors } from "redux-form";
import { ErrorField, regexExpression } from "../InterfaceValidator";

  const validate = (dataFormFooter, { footerPresenter, t }: any): FormErrors => {
  let errors: FormErrors<ErrorField> = {};
  if (!regexExpression.regexEmail.test(dataFormFooter.email) ||
      !dataFormFooter.email
  ) {
    errors.email = t(footerPresenter.messageForm.keyEmailErrorMessage);
  }
  return errors;
};

export default validate;
