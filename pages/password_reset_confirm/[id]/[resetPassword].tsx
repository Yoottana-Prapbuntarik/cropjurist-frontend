import React from 'react';
import LandingLayout from '../../../components/LandingLayout/LandingLayout';
import ChangePassword from '../../../components/ChangePassword/ChangePasswordContainer';
import { themeManager } from '../../../manager/themeManager';

const resetPassword = () => {
	return (
		<LandingLayout
			styleTheme={themeManager.StylesMainSubFolder}
			themePlugin={themeManager.ThemePluginMainSubFolder}
			themeScript={themeManager.ThemeScriptMainSubFolder}
		>
			<div className="min-vh-100">
				<ChangePassword />
			</div>
		</LandingLayout>
	);
};

export default resetPassword;