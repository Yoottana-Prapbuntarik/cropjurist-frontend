import { connect } from 'react-redux';
import { withTranslation } from '../../i18n';
import validate from '../../Validated/FooterValidator/FooterValidator';
import { reduxForm } from 'redux-form';
import Footer from './Footer';
import { SubscribeItem, FooterMenu, MenuItem, SocialItem, MessageForm, FooterPresenter } from './FooterViewInterfaces';

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

export const footerReducer = (state: FooterPresenter = footerPresenter) => {
	return state;
};

const mapStateToProps = (state: any) => ({
	footerPresenter: state.footerReducer
});

export default withTranslation('common')(connect(mapStateToProps)(reduxForm({ form: 'FooterForm', validate })(Footer)));
