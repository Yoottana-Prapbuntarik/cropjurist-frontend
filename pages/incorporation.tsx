import React from 'react';
import LandingLayout from '../components/LandingLayout/LandingLayout';
import Section from '../components/Section/SectionIncorporationContainer';
import Services from '../components/Services/ServicesContainer';

const Incorporation = () => {
	return (
		<LandingLayout>
			<div className="min-vh-100">
				<Section />
				<Services />
			</div>
		</LandingLayout>
	);
};

export default Incorporation;
