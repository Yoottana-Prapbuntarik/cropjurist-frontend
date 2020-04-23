import { connect } from 'react-redux';
import { withTranslation } from '../../i18n';
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
	keyEmailErrorMessage: 'emailErrorMessage',
	keyIsFooterSubscrbe: 'isFooterSubscrbe',
	keyFooterSubscrbe: 'footerSubscrbe'
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
			return state;
		case SubscribeAction.SendEmail_Failed:
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
		console.log(event.email);
		dispatch(subscribe(event.email));
		dispatch(reset('FooterForm'));
	}
});

const form = reduxForm({ form: 'FooterForm', validate })(Footer);

export default withTranslation('common')(connect(mapStateToProps, mapDispatchToProps)(form));
