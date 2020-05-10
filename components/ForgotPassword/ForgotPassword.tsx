import Link from 'next/link';
import { withTranslation } from '../../i18n';
import { Field } from 'redux-form';
import TextField from '../FieldComponents/TextField';
import ButtonSubmit from '../FieldComponents/ButtonSubmit';

const ForgotPassword = ({ handleSubmit, submitResetPassword, forgotPasswordPresenter, t }: any) => {
	return (
		<div className="container mt-5">
			<div className="row">
				<div className="col-md-6 col-12">
					<img
						className="img-responsive w-100"
						src={forgotPasswordPresenter.keyImagePath}
						alt="image signin"
					/>
				</div>
				<div className="col-md-6 col-12 mt-5">
					<div>
						<div className="text-center ">
							<h2 className="pt-2">{t(forgotPasswordPresenter.keyHeader)}</h2>
							<p>{t(forgotPasswordPresenter.keyEmail)}</p>
						</div>
						<form onSubmit={handleSubmit(submitResetPassword)}>
							<div className="messages" />
							<div className="form-group">
								<label>{t(forgotPasswordPresenter.keyEmail)}</label>
								<Field
									name="email"
									type="email"
									component={TextField}
									styleTextError="text-danger"
									className="form-control"
									label={t(forgotPasswordPresenter.keyEmail)}
								/>
							</div>
							<Field
								name="submit"
								type="submit"
								style="btn btn-primary btn-block w-100"
								component={ButtonSubmit}
								label={t(forgotPasswordPresenter.keyButtonName)}
							/>
						</form>
						<div className="mt-4 text-center">
							<Link href="/signin">{t(forgotPasswordPresenter.keyBackToLogin)}</Link>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default withTranslation('common')(ForgotPassword);
