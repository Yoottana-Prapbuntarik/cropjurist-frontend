import service from './baseAPIs';
import { Dispatch } from 'redux';
export enum chooseProvincesAction {
    chooseProvinces_Success = 'chooseProvinces_Success'
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
                    type: chooseProvincesAction.chooseProvinces_Success,
                    key_provinces: response.data.data
                });
            }
    })
}