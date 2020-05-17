import { connect } from 'react-redux';
import { ActivateAccountPresenter } from './ActivateAccountInterface';
import ActivateAccount from './ActivateAccount';

const activateAccountPresenter: ActivateAccountPresenter = {
    // keyImagePath: 'assets/images/activate/aa.png',
    keyImagePath: 'https://via.placeholder.com/500/0000FF/FFFFFF?Text=Digital.com%20C/O%20https://placeholder.com/',
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