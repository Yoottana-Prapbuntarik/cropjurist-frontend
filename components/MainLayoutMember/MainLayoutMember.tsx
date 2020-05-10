import Head from 'next/head';
import { withTranslation } from '../../i18n';

import NavigationMember from '../NavigationMember/NavigationMemberContainer';
const MainLayoutMember = (props: any) => (
	<div className="page-wrapper">
		<Head>
			<title>{props.t('memberLayoutTitle')}</title>

			<link href="styles/plugins/theme-plugin.css" rel="stylesheet" />
			<script src="assets/js/theme-plugin.js" />
			<script src="assets/js/theme-script.js" />
		</Head>
		<NavigationMember />
		{props.children}
	</div>
);

export default withTranslation('common')(MainLayoutMember);