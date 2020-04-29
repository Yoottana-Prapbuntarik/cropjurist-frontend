import Link from 'next/link';
import { Field } from 'redux-form';
import { withTranslation } from '../../i18n';
import TextField from '../../components/FieldComponents/TextField';
import ButtonSubmit from '../../components/FieldComponents/ButtonSubmit';

const Signup = ({ handleSubmit, signupPresenter, submitSignup, t }: any) => {
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
						<form onSubmit={handleSubmit(submitSignup)}>
							<div className="messages" />
							<div className="row">
								<div className="col-md-6">
									<div className="form-group">
										<Field
											type="text"
											name="firstName"
											component={TextField}
											label={t(signupPresenter.signupItemInputform.keyPlaceholderFirstNameSignup)}
											styleTextError="text-danger"
											className="form-control"
											data-error="Firstname is required."
										/>
										<div className="help-block with-errors" />
									</div>
								</div>
								<div className="col-md-6">
									<div className="form-group">
										<Field
											type="text"
											name="lastName"
											component={TextField}
											label={t(signupPresenter.signupItemInputform.keyPlaceholderLastNameSignup)}
											styleTextError="text-danger"
											className="form-control"
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
											component={TextField}
											label={t(signupPresenter.signupItemInputform.keyPlaceholderEmailSignup)}
											className="email form-control email-subscribe-height"
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
											component={TextField}
											label={t(
												signupPresenter.signupItemInputform.keyPlaceholderReEnterEmailSignup
											)}
											styleTextError="text-danger"
											className="email form-control email-subscribe-height"
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
											component={TextField}
											label={t(signupPresenter.signupItemInputform.keyPlaceholderPasswordSignup)}
											styleTextError="text-danger"
											className="form-control"
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
											component={TextField}
											label={t(
												signupPresenter.signupItemInputform.keyPlaceholderConfirmPasswordSignup
											)}
											styleTextError="text-danger"
											className="form-control"
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
