import { connect } from 'react-redux';
import Navigation from './Navigation';
import { NavigationItem, NavigationPresenter } from './NavigationInterfaces';
import { Dispatch } from 'redux';
import { i18n } from '../../i18n';

enum NavigationAction {
	CHANGE_LANGUAGE = 'CHANGE_LANGUAGE'
}

const navigationItems: NavigationItem[] = [
	{ keyTitle: 'features', routePath: '/index' },
	{ keyTitle: 'incorporation', routePath: '/incorporation' },
	{ keyTitle: 'signin', routePath: '/signin' }
];

const navigationPresenter: NavigationPresenter = {
	navigationItems: navigationItems
};

export const navigationReducer = (state: NavigationPresenter = navigationPresenter, action: any) => {
	switch (action.type) {
		case NavigationAction.CHANGE_LANGUAGE:
			i18n.changeLanguage(i18n.language === 'en' ? 'th' : 'en');
			return action.navigationPresenter;
		default:
			return state;
	}
};

const changeLanguageAction: any = () => ({
	type: NavigationAction.CHANGE_LANGUAGE,
	navigationPresenter: navigationPresenter
});

const mapStateToProps = (state: any) => ({
	navigationPresenter: state.navigationReducer
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
	changeLanguage: () => dispatch(changeLanguageAction())
});

export default connect(mapStateToProps, mapDispatchToProps)(Navigation);
