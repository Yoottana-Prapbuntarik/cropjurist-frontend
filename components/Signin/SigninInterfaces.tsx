export interface SubscribeItem {
  readonly signinLabelUsername: string;
  readonly signinPlaceholderUsername: string;
  readonly signinLabelPassword: string;
  readonly signinPlaceholderPassword: string;
  readonly signinRemember: string;
  readonly signinForgot: string;
  readonly signinSubmit: string;
  readonly signupAccount: string;
  readonly signup: string;
}

export interface SiginPresenter {
  readonly keySigninHeader: string;
  readonly subscribeItem: SubscribeItem;
}

