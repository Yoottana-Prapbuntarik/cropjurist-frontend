import { serviceSetToken } from './baseAPIs'
import { Dispatch } from 'redux'

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
      const dataCompanyAPI = response.data[defineIndexInArray.indexOne]
      if (response) {
        serviceSetToken({
          method: 'get',
          url: `/address_search/${dataCompanyAPI.province}`
        })
          .then((responseProvince) => {
            serviceSetToken({
              method: 'get',
              url: `/address_search/${responseProvince.data.data[defineIndexInArray.indexOne].province_id}/${dataCompanyAPI.district}`
            })
              .then((responseDistrict) => {
                serviceSetToken({
                  method: 'get',
                  url: `/address_search/${responseProvince.data.data[defineIndexInArray.indexOne].province_id}/${responseDistrict.data.data[defineIndexInArray.indexOne].district_id}/${dataCompanyAPI.sub_district}`
                })
                  .then((responseSubDistrict) => {
                    dispatch({
                      type: getInformationCompanyAction.getInformationCompany_Success,
                      keyStatus: response.status,
                      getInformationCompany: dataCompanyAPI,
                      getInformationCompanyProvince: responseProvince.data.data[defineIndexInArray.indexOne],
                      getInformationCompanyDistrict: responseDistrict.data.data[defineIndexInArray.indexOne],
                      getInformationCompanySubDistrict: responseSubDistrict.data.data[defineIndexInArray.indexOne]
                    })
                  })
              })
          })
      }
    })

    .catch((error) => {
      console.log(error)
      dispatch({
        type: getInformationCompanyAction.getInformationCompany_Failed
      })
    })
}
