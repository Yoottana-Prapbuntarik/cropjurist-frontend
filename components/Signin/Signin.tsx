import Link from 'next/link';
import { sendDataSignin } from '../../services/signin';
import { withTranslation } from '../../i18n';
import { Field, reset } from 'redux-form';
import { useDispatch } from 'react-redux';
import EmailTextField from '../../components/FieldComponents/EmailTextField';
import PasswordTextField from '../../components/FieldComponents/PasswordTextField';
import ButtonSubmit from '../../components/FieldComponents/ButtonSubmit';
import CheckBox from '../../components/FieldComponents/CheckBox';

const Signin = ({ handleSubmit, signinPresenter, t }: any) => {
	const dispatch = useDispatch();
	const SubmitSignin = (event) => {
		if (event.checkbox === undefined) {
			event.checkbox = false;
		}
		let dataSingin = {
			email: event.email,
			password: event.password,
			is_remember: event.checkbox
		};

		sendDataSignin(dataSingin, {
			success: t(signinPresenter.messageForm.keyIsSignin),
			failed: t(signinPresenter.messageForm.keySignin)
		});
		dispatch(reset('SigninForm'));
	};

	return (
		<div className="container">
			<div className="row justify-content-center">
				<div className="col-lg-6">
					<img
						className="img-responsive w-100"
						src={signinPresenter.signinItem.keyimagePath}
						alt="image signin"
					/>
				</div>
				<div className="col-lg-6 col-8">
					<h2 className="text-center mb-3">{t(signinPresenter.keySigninHeader)}</h2>
					<form onSubmit={handleSubmit(SubmitSignin)}>
						<div className="messages" />
						<div className="form-group">
							<label>{t(signinPresenter.signinItem.keySigninLabelUsername)}</label>
							<Field
								name="email"
								type="email"
								component={EmailTextField}
								styleTextError="text-danger"
								label={t(signinPresenter.signinItem.keySigninPlaceholderUsername)}
							/>
						</div>
						<div className="form-group">
							<label>{t(signinPresenter.signinItem.keySigninLabelPassword)}</label>
							<Field
								name="password"
								type="password"
								styleTextError="text-danger"
								component={PasswordTextField}
								label={t(signinPresenter.signinItem.keySigninPlaceholderPassword)}
							/>
						</div>
						<div className="form-group mt-4 mb-5">
							<div className="remember-checkbox d-flex flex-wrap align-items-center justify-content-between">
								<div className="checkbox">
									<Field type="checkbox" name="checkbox" component={CheckBox} />
									<label className="pl-1" htmlFor="checkbox">
										{t(signinPresenter.signinItem.keyRemember)}
									</label>
								</div>
								<a href="#">{t(signinPresenter.signinItem.keyForgotPassword)}</a>
							</div>
						</div>{' '}
						<Field
							name="submit"
							type="submit"
							style="btn btn-primary btn-block"
							component={ButtonSubmit}
							label={t(signinPresenter.signinItem.keySigninSubmit)}
						/>
					</form>
					<div className="d-flex align-items-center flex-wrap text-center justify-content-center mt-4">
						<span className="text-muted mr-1">{t(signinPresenter.signinItem.keySignupAccount)}</span>
						<Link href="/signup">{t(signinPresenter.signinItem.keySignupButton)}</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default withTranslation('common')(Signin);
