import service from './baseAPIs';
import { Dispatch } from 'redux';

export enum chooseDistrictAction {
    chooseDistrict_Success = 'chooseDistrict_Success'
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
                    type: chooseDistrictAction.chooseDistrict_Success,
                    key_district: response.data.data
                });
            }
    })
}