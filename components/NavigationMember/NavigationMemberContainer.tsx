import { connect } from 'react-redux';
import NavigationMember from './NavigationMember';
import { NavigationMemberPresenter, NavigationMemberItem } from './NavigationMemberInterface';
import { Dispatch } from 'redux';
import { i18n } from '../../i18n';
import { FormManager } from '../../manager/formManager';
import { reset } from 'redux-form';

enum NavigationMemberAction {
    CHANGE_LANGUAGE_MEMBER_MENU = 'CHANGE_LANGUAGE_MEMBER_MENU'
}

const navigationMemberItem: NavigationMemberItem[] = [
    { keyTitleMemberMenu: 'signout', routePathMemberMenu: '/index' }
];

const navigationMemberPresenter: NavigationMemberPresenter = {
    navigationMemberItem: navigationMemberItem
}

export const navigationMemberReducer = (state: NavigationMemberPresenter = navigationMemberPresenter, action: any) => {
    switch (action.type) {
        case NavigationMemberAction.CHANGE_LANGUAGE_MEMBER_MENU:
            i18n.changeLanguage(i18n.language === 'en' ? 'th' : 'en');
            return action.navigationMemberPresenter
        default:
            return state;
    }
}

const changeLanguageAction: any = () => ({
    type: NavigationMemberAction.CHANGE_LANGUAGE_MEMBER_MENU,
    navigationMemberPresenter: navigationMemberPresenter
});

const mapStateToProps = (state: any) => ({
    navigationMemberPresenter: state.navigationMemberReducer
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
    changeLanguage: () => {
        dispatch(changeLanguageAction());
        const forms = [FormManager.InformationForm];
        forms.forEach((element) => dispatch(reset(element)));
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(NavigationMember);