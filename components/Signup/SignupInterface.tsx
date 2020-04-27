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
	readonly keyimagePath: string;
}

export interface SignupPresenter {
	readonly keySignupHeader: string;
	readonly signupItemInputform: SingupItemsInputform;
}
