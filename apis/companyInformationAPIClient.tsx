import { Dispatch } from "redux";
import { serviceSetToken } from "../apis/baseAPIs";
import { KeyManager } from '../manager/keyManager';

export enum SendInformationCompany {
    SendInformationCompany_Success = 'SendInformationCompany_Success',
    SendInformationCompany_Failed = 'SendInformationCompany_Failed'
}

export const companyInformationForm: any = (company_name_1: string, company_name_2: string, company_name_3: string,
    registration_no: string, address_no: string, village: string, road: string,
    province: string, district: string, sub_district: string, zipcode: string,
    license_number: string, auditor_name: string) => async (dispatch: Dispatch
    ) => {

        serviceSetToken({
            method: 'post',
            url: 'company_information/',
            data: params(company_name_1, company_name_2, company_name_3,
                registration_no, address_no, village, road,
                province, district, sub_district, zipcode,
                license_number, auditor_name)
        })

            .then((response) => {
                if (response) {
                    dispatch({
                        type: SendInformationCompany.SendInformationCompany_Success,
                        keyMessage: KeyManager.SendInformationCompanySuccess
                    });
                }
            })

            .catch((error) => {
                if (error) {
                    dispatch({
                        type: SendInformationCompany.SendInformationCompany_Failed,
                        keyMessage: error.response.data[0]
                    });
                }
            });
    };

export const updateCompanyInformationForm: any = (currentIdInformation: number,company_name_1: string, company_name_2: string, company_name_3: string,
    registration_no: string, address_no: string, village: string, road: string,
    province: string, district: string, sub_district: string, zipcode: string,
    license_number: string, auditor_name: string) => async (dispatch: Dispatch
    ) => {

        serviceSetToken({
            method: 'put',
            url: `company_information/${currentIdInformation}/edit/`,
            data: params(company_name_1, company_name_2, company_name_3,
                registration_no, address_no, village, road,
                province, district, sub_district, zipcode,
                license_number, auditor_name)
        })

            .then((response) => {
                if (response) {
                    dispatch({
                        type: SendInformationCompany.SendInformationCompany_Success,
                        keyMessage: KeyManager.SendInformationCompanySuccess
                    });
                }
            })

            .catch((error) => {
                if (error) {
                    dispatch({
                        type: SendInformationCompany.SendInformationCompany_Failed,
                        keyMessage: error.response.data[0]
                    });
                }
            });
    };
    
const params = (company_name_1: string, company_name_2: string, company_name_3: string,
    registration_no: string, address_no: string, village: string, road: string,
    province: string, district: string, sub_district: string, zipcode: string,
    license_number: string, auditor_name: string) => {
    return {
        company_name_1: company_name_1,
        company_name_2: company_name_2,
        company_name_3: company_name_3,
        registration_no: registration_no,
        address_no: address_no,
        village: village,
        road: road,
        province: province,
        district: district,
        sub_district: sub_district,
        zipcode: zipcode,
        license_number: license_number,
        auditor_name: auditor_name
    };
}