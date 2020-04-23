import React from 'react';
import LandingLayout from '../components/LandingLayout/LandingLayout';
import Signup from '../components/Signup/SignupContainer';

const SignupPage = () => {
	return (
		<LandingLayout>
			<div className="min-vh-100">
				<Signup />
			</div>
		</LandingLayout>
	);
};

export default SignupPage;
