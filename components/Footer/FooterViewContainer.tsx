import { connect } from 'react-redux';
import { withTranslation, i18n } from '../../i18n';
import { subscribe, SubscribeAction } from '../../services/subscribe';
import { reduxForm, reset } from 'redux-form';
import { SubscribeItem, FooterMenu, MenuItem, SocialItem, MessageForm, FooterPresenter } from './FooterViewInterfaces';
import { Dispatch } from 'redux';

import validate from '../../Validated/FooterValidator/FooterValidator';
import Footer from './Footer';

const footerMenuItems: MenuItem[] = [
	{ keyTitle: 'features', routePath: '/index' },
	{ keyTitle: 'incorporation', routePath: '/incorporation' },
	{ keyTitle: 'signin', routePath: '/' }
];

const socialtems: SocialItem[] = [
	{ name: 'la la-facebook', routePath: '/' },
	{ name: 'la la-twitter', routePath: '/' },
	{ name: 'lab la-line', routePath: '/' },
	{ name: 'la la-envelope', routePath: '/' }
];

const footerMenu: FooterMenu = {
	keyHeaderTitle: 'pages',
	footerMenuItems: footerMenuItems
};

const subScribeItem: SubscribeItem = {
	keySubScribeTitle: 'subScribeTitle',
	keySubScribeDescription: 'subScribeDescription',
	keySubDescriptionForSubScribe: 'subDescriptionForSubScribe',
	keyEmail: 'email',
	keySubmitButton: 'subscribe'
};

const messageForm: MessageForm = {
	keyEmailErrorMessage: 'emailErrorMessage'
};

const footerPresenter: FooterPresenter = {
	subscribeItem: subScribeItem,
	menu: footerMenu,
	socialItems: socialtems,
	messageForm: messageForm
};

export const footerReducer = (state: FooterPresenter = footerPresenter, action: any) => {
	switch (action.type) {
		case SubscribeAction.SendEmail_Success:
			alert(i18n.t('isFooterSubscrbe'));
			return state;
		case SubscribeAction.SendEmail_Failed:
			alert(i18n.t('footerSubscrbe'));
			return state;
		default:
			return state;
	}
};

const mapStateToProps = (state: any) => ({
	footerPresenter: state.footerReducer
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
	submitSubscribe: (event: any) => {
		dispatch(subscribe(event.email));
		dispatch(reset('FooterForm'));
	}
});

const form = reduxForm({ form: 'FooterForm', validate })(Footer);

export default withTranslation('common')(connect(mapStateToProps, mapDispatchToProps)(form));
