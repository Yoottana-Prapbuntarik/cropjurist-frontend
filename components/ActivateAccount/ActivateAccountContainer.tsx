import { connect } from 'react-redux';
import { ActivateAccountPresenter } from './ActivateAccountInterface';
import ActivateAccount from './ActivateAccount';

const activateAccountPresenter: ActivateAccountPresenter = {
    keyImagePath: '../../assets/images/activate/activate.jpg',
    keyTitleActivateAccount: 'titleActivateAccount',
    keyDetailActivateAccount: 'detailActivateAccount',
    keyBackToSignin: 'signin'
}

export const activateAccountReducer = (state: ActivateAccountPresenter = activateAccountPresenter) =>{
    return state;
};

const mapStateToProps = (state: any) => ({
    activateAccountPresenter: state.activateAccountReducer
})

export default connect(mapStateToProps)(ActivateAccount);