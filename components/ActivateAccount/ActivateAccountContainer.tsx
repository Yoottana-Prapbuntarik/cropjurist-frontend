import { connect } from 'react-redux';
import { ActivateAccountPresenter } from './ActivateAccountInterface';
import ActivateAccount from './ActivateAccount';
import { verificationAction, verification } from '../../apis/verificationAPIClient';
import { Dispatch } from 'redux';

const activateAccountPresenter: ActivateAccountPresenter = {
	keyImagePath: '../../../assets/images/activate/activate.jpg',
	keyTitleActivateAccount: 'titleActivateAccount',
	keyDetailActivateAccount: 'detailActivateAccount',
	keyBackToSignin: 'signin'
};

export const activateAccountReducer = (state: ActivateAccountPresenter = activateAccountPresenter, action: any) => {
	switch (action.type) {
		case verificationAction.verification_Success:
			return state;
			
		default:
			return state;
	}
};

const mapStateToProps = (state: any) => ({
	activateAccountPresenter: state.activateAccountReducer,
});

const mapDispatchToProps = (dispatch: Dispatch, ownProps: any) => ({
	verificationUser: () => dispatch(verification(ownProps.tokenID, ownProps.pkId))
})

export default connect(mapStateToProps, mapDispatchToProps)(ActivateAccount);