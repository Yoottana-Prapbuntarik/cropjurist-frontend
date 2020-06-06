import { withTranslation } from '../../i18n';
import { routeToSignin } from '../../manager/routerManager';
import Router from 'next/router';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

const ActivateAccount = ({ activateAccountPresenter, verificationUser, t }: any) => {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(verificationUser);
	}, []);

	return (
		<div className="container my-5">
			<div className="row align-items-center">
				<div className="col-lg-6 col-12 my-3 text-center">
					<img
						className="img-responsive w-100"
						src={activateAccountPresenter.keyImagePath}
						alt="img activate account"
					/>
				</div>
				<div className="col-lg-6 col-12 my-3 text-center">
					<h1>{t(activateAccountPresenter.keyTitleActivateAccount)}</h1>
					<p>{t(activateAccountPresenter.keyDetailActivateAccount)}</p>
					<button className="btn btn-primary" onClick={() => Router.push(routeToSignin)}>
						{t(activateAccountPresenter.keyBackToSignin)}
					</button>
				</div>
			</div>
		</div>
	);
};

export default withTranslation('common')(ActivateAccount);