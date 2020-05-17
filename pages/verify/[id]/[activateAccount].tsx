import React from 'react';
import LandingLayout from '../../../components/LandingLayout/LandingLayout';
import ActivateAccoount from '../../../components/ActivateAccount/ActivateAccountInterfaceActivateAccountContainer';

const activateAccount = () => {
    return (
        <LandingLayout>
            <div className="min-vh-100">
                <ActivateAccoount />
            </div>
        </LandingLayout>
    );
};
export default activateAccount;
