import service from './baseAPIs'
import { Dispatch } from 'redux'

export enum AddressAction {
chooseProvincesSuccess = 'chooseProvinces_Success',
chooseDistrictSuccess = 'chooseDistrict_Success',
chooseDistrictFailed = 'chooseDistrict_Failed',
chooseSubDistrictSuccess = 'chooseSubDistrict_Success',
chooseSubDistrictFailed = 'chooseSubDistrict_Failed',
chooseZipCodeSuccess = 'chooseZipCode_Success',
chooseZipCodeFailed = 'chooseZipCode_Failed'
}

export const chooseProvinces: any = () => async (dispatch: Dispatch
) => {
  service({
    method: 'get',
    url: 'provinces/'
  })
    .then((response) => {
      if (response) {
        dispatch({
          type: AddressAction.chooseProvincesSuccess,
          provinces: response.data.data
        })
      }
    })
}

export const chooseDistrict: any = (provinceID: number) => async (dispatch: Dispatch
) => {
  service({
    method: 'get',
    url: `${provinceID}/districts`
  })

    .then((response) => {
      if (response) {
        dispatch({
          type: AddressAction.chooseDistrictSuccess,
          district: response.data.data
        })
      }
    })

    .catch(error => {
      if (error) {
        dispatch({
          type: AddressAction.chooseDistrictFailed
        })
      }
    })
}

export const chooseSubDistrict: any = (provinceID: number,
  districtID: number) => async (dispatch: Dispatch
) => {
  service({
    method: 'get',
    url: `${provinceID}/${districtID}/sub_districts`
  })

    .then((response) => {
      if (response) {
        dispatch({
          type: AddressAction.chooseSubDistrictSuccess,
          subDistrict: response.data.data
        })
      }
    })

    .catch(error => {
      if (error) {
        dispatch({
          type: AddressAction.chooseSubDistrictFailed
        })
      }
    })
}

export const chooseZipCode: any = (provinceID: number,
  districtID: number,
  subDistrictID: number) => async (dispatch: Dispatch
) => {
  service({
    method: 'get',
    url: `${provinceID}/${districtID}/${subDistrictID}/zipcode`
  })
    .then((response) => {
      if (response) {
        dispatch({
          type: AddressAction.chooseZipCodeSuccess,
          zipCode: response.data
        })
      }
    })

    .catch(error => {
      if (error) {
        dispatch({
          type: AddressAction.chooseZipCodeFailed
        })
      }
    })
}
