import { connect } from 'react-redux';
import Navigation from './Navigation';
import { NavigationMemberPresenter, NavigationMemberItem } from './NavigationInterfaces';
import { Dispatch } from 'redux';
import { i18n } from '../../i18n';
import { FormManager } from '../../manager/formManager';
import { reset } from 'redux-form';

enum NavigationIncorporationAction {
    CHANGE_LANGUAGE_MEMBER_MENU = 'CHANGE_LANGUAGE_MEMBER_MENU'
}

const navigationMemberItem: NavigationMemberItem[] = [
    { keyTitleMemberMenu: 'signout', routePathMemberMenu: '/index' }
];

const navigationMemberPresenter: NavigationMemberPresenter = {
    navigationMemberItem: navigationMemberItem
}

export const navigationIncorporationReducer = (state: NavigationMemberPresenter = navigationMemberPresenter, action: any) => {
    switch (action.type) {
        case NavigationIncorporationAction.CHANGE_LANGUAGE_MEMBER_MENU:
            i18n.changeLanguage(i18n.language === 'en' ? 'th' : 'en');
            return action.navigationMemberPresenter
        default:
            return state;
    }
}

const changeLanguageAction: any = () => ({
    type: NavigationIncorporationAction.CHANGE_LANGUAGE_MEMBER_MENU,
    navigationMemberPresenter: navigationMemberPresenter
});

const mapStateToProps = (state: any) => ({
    navigationMemberPresenter: state.navigationIncorporationReducer
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
    changeLanguage: () => {
        dispatch(changeLanguageAction());
        const forms = [FormManager.InformationForm];
        forms.forEach((element) => dispatch(reset(element)));
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(Navigation);