import service from './baseAPIs';
import { Dispatch } from 'redux';

export enum chooseZipCodeAction {
    chooseZipCode_Success = 'chooseZipCode_Success'
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
                    type: chooseZipCodeAction.chooseZipCode_Success,
                    key_zip_code: response.data
                });
            }
    })
}