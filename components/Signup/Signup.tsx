import { sendDataSignup } from '../../services/signup';
import Link from 'next/link';
import { Field, reset } from 'redux-form';
import { withTranslation } from '../../i18n';
import FirstNameTextField from '../../components/FieldComponents/FirstNameTextField';
import LastNameTextField from '../../components/FieldComponents/LastNameTextField';
import EmailTextField from '../../components/FieldComponents/EmailTextField';
import ConfirmEmailTextField from '../../components/FieldComponents/ConfirmEmailTextField';
import PasswordTextField from '../../components/FieldComponents/PasswordTextField';
import ConfirmPasswordTextField from '../../components/FieldComponents/ConfirmPasswordTextField';
import ButtonSubmit from '../../components/FieldComponents/ButtonSubmit';
import { useDispatch } from 'react-redux';

const Signup = ({ handleSubmit, signupPresenter, t }: any) => {
	const dispatch = useDispatch();
	const SubmitSignup = (event) => {
		let dataSignup = {
			first_name: event.firstname,
			last_name: event.lastname,
			email: event.email,
			password: event.password
		};

		sendDataSignup(dataSignup, {
			success: t(signupPresenter.messageForm.keyIsSignup),
			failed: t(signupPresenter.messageForm.keySignup)
		});
		dispatch(reset('SignupForm'));
	};

	return (
		<div className="container">
			<div className="row">
				<div className="col-lg-6">
					<img
						className="img-responsive w-100"
						src={signupPresenter.signupItemInputform.keyimagePath}
						alt="image signup"
					/>
				</div>
				<div className="col-lg-6 col-md-10 ml-auto mr-auto">
					<h2 className="mt-3 mb-3 text-center">{t(signupPresenter.keySignupHeader)}</h2>
					<div className="register-form text-center">
						<form onSubmit={handleSubmit(SubmitSignup)}>
							<div className="messages" />
							<div className="row">
								<div className="col-md-6">
									<div className="form-group">
										<Field
											type="text"
											name="firstname"
											component={FirstNameTextField}
											label={t(signupPresenter.signupItemInputform.keyPlaceholderFirstNameSignup)}
											styleTextError="text-danger"
											data-error="Firstname is required."
										/>
										<div className="help-block with-errors" />
									</div>
								</div>
								<div className="col-md-6">
									<div className="form-group">
										<Field
											type="text"
											name="lastname"
											component={LastNameTextField}
											label={t(signupPresenter.signupItemInputform.keyPlaceholderLastNameSignup)}
											styleTextError="text-danger"
											data-error="Lastname is required."
										/>
										<div className="help-block with-errors" />
									</div>
								</div>
							</div>
							<div className="row">
								<div className="col-md-12">
									<div className="form-group">
										<Field
											type="email"
											name="email"
											component={EmailTextField}
											label={t(signupPresenter.signupItemInputform.keyPlaceholderEmailSignup)}
											styleTextError="text-danger"
											data-error="Valid email is required."
										/>
										<div className="help-block with-errors" />
									</div>
								</div>
								<div className="col-md-12">
									<div className="form-group">
										<Field
											type="email"
											name="confirmEmail"
											component={ConfirmEmailTextField}
											label={t(
												signupPresenter.signupItemInputform.keyPlaceholderReEnterEmailSignup
											)}
											styleTextError="text-danger"
											data-error="Valid email is required."
										/>
										<div className="help-block with-errors" />
									</div>
								</div>
							</div>
							<div className="row">
								<div className="col-md-12">
									<div className="form-group">
										<Field
											type="password"
											name="password"
											component={PasswordTextField}
											label={t(signupPresenter.signupItemInputform.keyPlaceholderPasswordSignup)}
											styleTextError="text-danger"
											data-error="password is required."
										/>
										<div className="help-block with-errors" />
									</div>
								</div>
								<div className="col-md-12">
									<div className="form-group">
										<Field
											type="password"
											name="confirmPassword"
											component={ConfirmPasswordTextField}
											label={t(
												signupPresenter.signupItemInputform.keyPlaceholderConfirmPasswordSignup
											)}
											styleTextError="text-danger"
											data-error="Conform Password is required."
										/>
										<div className="help-block with-errors" />
									</div>
								</div>
							</div>
							<div className="row">
								<div className="col-md-12">
									<Field
										type="submit"
										name="submit"
										component={ButtonSubmit}
										style="btn btn-primary"
										label={t(signupPresenter.signupItemInputform.keySubmitSignup)}
										styleTextError="text-danger"
									/>
									<span className="mt-4 d-block">
										{t(signupPresenter.signupItemInputform.keyHaveAccount)}{' '}
										<Link href="/signin">
											{t(signupPresenter.signupItemInputform.keySigninAccount)}
										</Link>
									</span>
								</div>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
};

export default withTranslation('common')(Signup);
