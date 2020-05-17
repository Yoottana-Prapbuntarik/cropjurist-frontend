import React from 'react';
import LandingLayout from '../../../components/LandingLayout/LandingLayout';
import ActivateAccoount from '../../../components/ActivateAccount/ActivateAccountInterfaceActivateAccountContainer';
import { useRouter } from 'next/router'

const activateAccount = () => {
    const router = useRouter();
    const { id } = router.query
    return (
        <LandingLayout>
            <div className="min-vh-100">
                <ActivateAccoount />
            </div>
        </LandingLayout>
    );
};
export default activateAccount;
