import { serviceSetToken } from './baseAPIs';
import { Dispatch } from 'redux';

export enum getInformationCompanyAction {
    getInformationCompany_Success = 'getInformationCompany_Success',
    getInformationCompany_Failed = 'getInformationCompany_Failed',
}

enum defineIndexInArray {
	indexOne = 0,
} 

export const getInformationCompany: any = () => async (dispatch: Dispatch) => {
    
    serviceSetToken({
        method: 'get',
        url: 'company_information'
    })

        .then((response) => {
            if (response) {
                dispatch({
                    type: getInformationCompanyAction.getInformationCompany_Success,
                    getInformationCompany: response.data[defineIndexInArray.indexOne],
                    keyStatus: response.status
                })
            }
        })

        .catch((error)=>{
            console.log(error)
            dispatch({
                type: getInformationCompanyAction.getInformationCompany_Failed,
                getInformationCompany: error.response.data
            })
        })
}