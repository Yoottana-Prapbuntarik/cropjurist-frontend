export interface SingupItemsInputform {
  readonly keyPlaceholderFirstNameSignup: string;
  readonly keyPlaceholderLastNameSignup: string;
  readonly keyPlaceholderEmailSignup: string;
  readonly keyPlaceholderReEnterEmailSignup: string;
  readonly keyPlaceholderPasswordSignup: string;
  readonly keyPlaceholderConfirmPasswordSignup: string;
  readonly keySubmitSignup: string;
  readonly keyHaveAccount: string;
  readonly keySigninAccount: string;
  readonly keyimagePath : string;
}
export interface ErrorMessageForm {
  readonly keyFirstnameErrorMessage:string;
  readonly keyLastnameErrorMessage:string;
  readonly keyEmailErrorMessage: string;
  readonly keyConfirmEmailErrorMessage: string;
  readonly keyPasswordErrorMessage:string;
  readonly keyConfirmPasswordErrorMessage:string;
}
export interface SignupPresenter {
  readonly keySignupHeader: string;
  readonly signupItemInputform: SingupItemsInputform;
  readonly errorMessageForm:ErrorMessageForm;
}
