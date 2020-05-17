import React from 'react';
import LandingLayout from '../../../components/LandingLayout/LandingLayout';
import ActivateAccoount from '../../../components/ActivateAccount/ActivateAccountContainer';
import { themeManager } from '../../../manager/themeManager';

const activateAccount = () => {
    return (
        <LandingLayout
            styleTheme={themeManager.StylesMainSubFolder}
            themePlugin={themeManager.ThemePluginMainSubFolder}
            themeScript={themeManager.ThemeScriptMainSubFolder}
        >
            <div className="min-vh-100">
                <ActivateAccoount />
            </div>
        </LandingLayout>
    );
};

export default activateAccount;