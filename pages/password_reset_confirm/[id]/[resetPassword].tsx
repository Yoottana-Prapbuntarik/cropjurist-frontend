import React from 'react';
import LandingLayout from '../../../components/LandingLayout/LandingLayout';
import ChangePassword from '../../../components/ChangePassword/ChangePasswordContainer';
//import { useRouter } from 'next/router'

const resetPassword = () => {
	return (
		<LandingLayout>
			<div className="min-vh-100">
				<ChangePassword />
			</div>
		</LandingLayout>
	);
};
export default resetPassword;
