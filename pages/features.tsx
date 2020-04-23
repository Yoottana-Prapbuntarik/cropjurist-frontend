import React from 'react';
import LandingLayout from '../components/LandingLayout/LandingLayout';
import Section from '../components/Section/SectionContainer';
import ListView from '../components/ListView/ListViewContainer';

const Features = () => {
	return (
		<LandingLayout>
			<div className="min-vh-100">
				<Section />
				<ListView />
			</div>
		</LandingLayout>
	);
};

export default Features;
