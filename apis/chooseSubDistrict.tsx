import service from './baseAPIs';
import { Dispatch } from 'redux';

export enum chooseSubDistrictAction {
    chooseSubDistrict_Success = 'chooseSubDistrict_Success'
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
                    type: chooseSubDistrictAction.chooseSubDistrict_Success,
                    key_sub_district: response.data.data
                });
            }
    })
}