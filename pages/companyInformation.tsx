import React from 'react';
import IncorporationManagerContainer from '../components/IncorporationManager/IncorporationManagerContainer';
import MainLayoutMember from '../components/MainLayoutMember/MainLayoutMember';
import CompanyInformationContainer from "../components/CompanyComponent/CompanyInformationContainer";

const companyInformation = () => {
    return (
        <MainLayoutMember>
            <IncorporationManagerContainer>
                <CompanyInformationContainer />
            </IncorporationManagerContainer>
        </MainLayoutMember>
    );
};

export default companyInformation;