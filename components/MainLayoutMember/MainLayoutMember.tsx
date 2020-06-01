import Head from 'next/head';
import { withTranslation } from '../../i18n';
import NavigationIncorporationContainer from '../../components/Navigation/NavigationIncorporationContainer';

const MainLayoutMember = (props: any) => {
	return (	
		<div className="page-wrapper">
			<Head>
				<title>{props.t('memberLayoutTitle')}</title>

				<link href="styles/plugins/theme-plugin.css" rel="stylesheet" />
				<script src="assets/js/theme-plugin.js" />
				<script src="assets/js/theme-script.js" />
			</Head>
			<NavigationIncorporationContainer />
			{props.children}
		</div>
	)
}

export default withTranslation('common')(MainLayoutMember);