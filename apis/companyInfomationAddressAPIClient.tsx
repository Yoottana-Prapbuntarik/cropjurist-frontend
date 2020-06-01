import service from './baseAPIs';
import { Dispatch } from 'redux';

export enum companyInformationAddressAction {
    chooseProvinces_Success = 'chooseProvinces_Success',
    chooseDistrict_Success = 'chooseDistrict_Success',
    chooseSubDistrict_Success = 'chooseSubDistrict_Success',
    chooseZipCode_Success = 'chooseZipCode_Success'
}

export const chooseProvinces: any = () => async (dispatch: Dispatch
) => {

    service({
        method: 'get',
        url: 'provinces/',
    })

        .then((response) => {
            if (response) {
                dispatch({
                    type: companyInformationAddressAction.chooseProvinces_Success,
                    key_provinces: response.data.data
                });
            }
        })
}

export const chooseDistrict: any = (province_id: number) => async (dispatch: Dispatch
) => {

    service({
        method: 'get',
        url: `${province_id}/districts`
    })

        .then((response) => {
            if (response) {
                dispatch({
                    type: companyInformationAddressAction.chooseDistrict_Success,
                    key_district: response.data.data
                });
            }
        })
}

export const chooseSubDistrict: any = (province_id: number, district_id: number) => async (dispatch: Dispatch
) => {

    service({
        method: 'get',
        url: `${province_id}/${district_id}/sub_districts`
    })

        .then((response) => {
            if (response) {
                dispatch({
                    type: companyInformationAddressAction.chooseSubDistrict_Success,
                    key_sub_district: response.data.data
                });
            }
        })
}

export const chooseZipCode: any = (province_id: number, district_id: number, sub_district_id: number) => async (dispatch: Dispatch
) => {

    service({
        method: 'get',
        url: `${province_id}/${district_id}/${sub_district_id}/zipcode`
    })
    
        .then((response) => {
            if (response) {
                dispatch({
                    type: companyInformationAddressAction.chooseZipCode_Success,
                    key_zip_code: response.data
                });
            }
        })
}