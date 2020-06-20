/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
// #region Import
import { connect } from 'react-redux'
import Router from 'next/router'
import { FormManager } from '../../manager/formManager'
import companyInformation from './CompanyInformation'
import { Dispatch } from 'redux'
import {
  withTranslation,
  i18n
} from '../../i18n'
import {
  reduxForm,
  reset
} from 'redux-form'
import {
  companyInformationForm,
  SendInformationCompany,
  updateCompanyInformationForm
} from '../../apis/companyInformationAPIClient'
import {
  getInformationCompany,
  getInformationCompanyAction
} from '../../apis/getInformationCompanyAPIClient'
import {
  companyInformationAddressAction,
  chooseProvinces,
  chooseDistrict,
  chooseSubDistrict,
  chooseZipCode
} from '../../apis/companyInfomationAddressAPIClient'
import {
  CompanyInformationPresenter
} from './CompanyInformationInterfaces'
import {
  companyInformationPresenter
} from './CompanyInformationPresenter'
import {
  KeyManager
} from '../../manager/keyManager'
import {
  TextManager
} from '../../manager/TextManager'
// #endregion

// #region Global Data
enum CompanyInformationAction {
handleChangeCompanyName1 = 'handleChangeCompanyName1',
handleChangeCompanyName2 = 'handleChangeCompanyName2',
handleChangeCompanyName3 = 'handleChangeCompanyName3',
handChangeRegistrationNumber = 'handChangeRegistrationNumber',
handChangeAddressNumber = 'handChangeAddressNumber',
handChangeVillage = 'handChangeVillage',
handChangeRoad = 'handChangeRoad',
handleChangeAuditorLicense = 'handleChangeAuditorLicense',
handleChangeAuditor = 'handleChangeAuditor',
}

let provinceId = 0
let districtId = 0
let subDistrictId = 0

let newProvincesAction = []
let newSubDistrictAction = []
let newDistrictAction = []
let newZipCodeAction = []
let currentIdInformation = 0

// #endregion

// #region Reducer
export const companyInformationReducer = (state: CompanyInformationPresenter = companyInformationPresenter,
  action: any): any => {
  switch (action.type) {
    case CompanyInformationAction.handleChangeCompanyName1:
      return {
        ...state,
        labelCompanyName1: {
          name: KeyManager.CompanyName1,
          keyCompanyName: KeyManager.CompanyName1,
          valueCompanyName: action.payload
        }
      }

    case CompanyInformationAction.handleChangeCompanyName2:
      return {
        ...state,
        labelCompanyName2: {
          name: KeyManager.CompanyName2,
          keyCompanyName: KeyManager.CompanyName2,
          valueCompanyName: action.payload
        }
      }

    case CompanyInformationAction.handleChangeCompanyName3:
      return {
        ...state,
        labelCompanyName3: {
          name: KeyManager.CompanyName3,
          keyCompanyName: KeyManager.CompanyName3,
          valueCompanyName: action.payload
        }
      }

    case CompanyInformationAction.handChangeRegistrationNumber:
      return {
        ...state,
        labelRegistrationNumber: {
          keyLabelName: KeyManager.RegistrationNumber,
          valueLabelAddress: action.payload,
          name: KeyManager.RegistrationNumber
        }
      }

    case CompanyInformationAction.handChangeAddressNumber:
      return {
        ...state,
        labelAddressNumber: {
          keyLabelName: KeyManager.AddressNumber,
          valueLabelAddress: action.payload,
          name: KeyManager.AddressNumber
        }
      }

    case CompanyInformationAction.handChangeVillage:
      return {
        ...state,
        labelVillage: {
          keyLabelName: KeyManager.Village,
          valueLabelAddress: action.payload,
          name: KeyManager.Village
        }
      }

    case CompanyInformationAction.handChangeRoad:
      return {
        ...state,
        labelRoad: {
          keyLabelName: KeyManager.Road,
          valueLabelAddress: action.payload,
          name: KeyManager.Road
        }
      }

    case CompanyInformationAction.handleChangeAuditorLicense:
      return {
        ...state,
        labelAuditorLicense: {
          keyLicense: KeyManager.AuditorLicense,
          valueLicense: action.payload
        }
      }

    case CompanyInformationAction.handleChangeAuditor:
      return {
        ...state,
        labelAuditor: {
          keyAuditorName: KeyManager.AuditorName,
          valueAuditorName: action.payload
        }
      }

    case companyInformationAddressAction.chooseProvinces_Success: {
      const reseProvinces = [{
        provinceID: 0,
        name: TextManager.SelectData
      }]
      newProvincesAction = reseProvinces.concat(action.key_provinces)
      return {
        ...state,
        provincesItem: newProvincesAction
      }
    }
    case companyInformationAddressAction.chooseDistrict_Success: {
      const resetDistrict = [{
        districtID: 0,
        name: TextManager.SelectData
      }]
      newDistrictAction = resetDistrict.concat(action.key_district)
      return {
        ...state,
        districtItem: newDistrictAction
      }
    }
    case companyInformationAddressAction.chooseDistrict_Failed: {
      const chooseDistrictFailed = [{
        districtID: 0,
        name: TextManager.SelectData
      }]
      return {
        ...state,
        districtItem: chooseDistrictFailed
      }
    }
    case companyInformationAddressAction.chooseSubDistrict_Success: {
      const resetSubDistrict = [{
        subDistrictID: 0,
        name: TextManager.SelectData
      }]
      newSubDistrictAction = resetSubDistrict.concat(action.key_sub_district)
      return {
        ...state,
        subDistrictItem: newSubDistrictAction
      }
    }
    case companyInformationAddressAction.chooseSubDistrict_Failed: {
      const chooseSubDistrictFailed = [{
        subDistrictID: 0,
        name: TextManager.SelectData
      }]
      return {
        ...state,
        subDistrictItem: chooseSubDistrictFailed
      }
    }
    case companyInformationAddressAction.chooseZipCode_Success: {
      const resetZipCode = [{ zipcode: TextManager.SelectData }]
      newZipCodeAction = resetZipCode.concat(action.key_zip_code)
      return {
        ...state,
        zipCode: newZipCodeAction
      }
    }
    case companyInformationAddressAction.chooseZipCode_Failed: {
      const chooseZipCodeFailed = [{ zipcode: TextManager.SelectData }]
      return {
        ...state,
        zipCode: chooseZipCodeFailed
      }
    }
    case SendInformationCompany.SendInformationCompany_Success:
      Router.push('/')

      break
    case SendInformationCompany.SendInformationCompany_Failed:
      alert(i18n.t(action.keyMessage))

      break
    case getInformationCompanyAction.getInformationCompany_Success: {
      if (action.getInformationCompany !== undefined) {
        currentIdInformation = action.getInformationCompany.id
        const companyInformationPresenter = {
          keyGetCurrentInfomationStatus: action.keyStatus,
          labelCompanyName1: {
            name: KeyManager.CompanyName1,
            keyCompanyName: KeyManager.CompanyName1,
            valueCompanyName: state.labelCompanyName1.valueCompanyName = action.getInformationCompany.company_name_1
          },
          labelCompanyName2: {
            name: KeyManager.CompanyName2,
            keyCompanyName: KeyManager.CompanyName2,
            valueCompanyName: state.labelCompanyName2.valueCompanyName = action.getInformationCompany.company_name_2
          },
          labelCompanyName3: {
            name: KeyManager.CompanyName3,
            keyCompanyName: KeyManager.CompanyName3,
            valueCompanyName: state.labelCompanyName3.valueCompanyName = action.getInformationCompany.company_name_3
          },
          labelRegistrationNumber: {
            keyLabelName: KeyManager.RegistrationNumber,
            valueLabelAddress: action.getInformationCompany.registration_no,
            name: KeyManager.RegistrationNumber
          },
          labelAddressNumber: {
            keyLabelName: KeyManager.AddressNumber,
            valueLabelAddress: action.getInformationCompany.address_no,
            name: KeyManager.AddressNumber
          },
          labelVillage: {
            keyLabelName: KeyManager.Village,
            valueLabelAddress: action.getInformationCompany.village,
            name: KeyManager.Village
          },
          labelRoad: {
            keyLabelName: KeyManager.Road,
            valueLabelAddress: action.getInformationCompany.road,
            name: KeyManager.Road
          },
          provincesItem: [{
            subDistrictID: 0,
            name: action.getInformationCompany.province
          }],
          districtItem: [{
            districtID: 0,
            name: action.getInformationCompany.district
          }],
          subDistrictItem: [{
            subDistrictID: 0,
            name: action.getInformationCompany.sub_district
          }],
          zipCode: [{ zipcode: action.getInformationCompany.zipcode }],
          labelAuditorLicense: {
            keyLicense: KeyManager.AuditorLicense,
            valueLicense: action.getInformationCompany.license_number
          },
          labelAuditor: {
            keyAuditorName: KeyManager.AuditorName,
            valueAuditorName: action.getInformationCompany.auditor_name
          }
        }
        return {
          ...state,
          companyInformationPresenter
        }
      } else {
        return state
      }
    }
    default:
      return state
  }
}

// #endregion

// #region Action and State

const mapStateToProps = (state: any) => ({
  companyInformationPresenter: state.companyInformationReducer
})

const mapDispatchToProps = (dispatch: Dispatch) => ({
  submitCompanyInformation: (event: any) => {
    const provinceData = newProvincesAction.find(provinceArray => provinceArray.province_id === event.province)
    const districtData = newDistrictAction.find(districtArray => districtArray.district_id === event.district)
    const subDistrictData = newSubDistrictAction.find(subDistrictArray => subDistrictArray.sub_district_id === event.subDistrict)

    if (provinceData !== undefined && provinceData !== undefined && subDistrictData !== undefined) {
      dispatch(companyInformationForm(event.companyName1, event.companyName2, event.companyName3, event.registrationNumber, event.addressNumber, event.village,
        event.road, provinceData.name, districtData.name, subDistrictData.name, event.zipCode, event.auditorLicense, event.auditorName))
    }

    dispatch(reset(FormManager.InformationForm))
    newDistrictAction = []
    newProvincesAction = []
    newSubDistrictAction = []
    newZipCodeAction = []
  },

  updateCompanyInformation: (event: any) => {
    const provinceData = newProvincesAction.find(provinceArray => provinceArray.province_id === event.province)
    const districtData = newDistrictAction.find(districtArray => districtArray.district_id === event.district)
    const subDistrictData = newSubDistrictAction.find(subDistrictArray => subDistrictArray.sub_district_id === event.subDistrict)

    if (provinceData !== undefined &&
      provinceData !== undefined &&
      subDistrictData !== undefined) {
      dispatch(updateCompanyInformationForm(currentIdInformation,
        event.companyName1,
        event.companyName2,
        event.companyName3,
        event.registrationNumber,
        event.addressNumber,
        event.village,
        event.road,
        provinceData.name,
        districtData.name,
        subDistrictData.name,
        event.zipCode, event.auditorLicense,
        event.auditorName))
    }

    dispatch(reset(FormManager.InformationForm))
    newDistrictAction = []
    newProvincesAction = []
    newSubDistrictAction = []
    newZipCodeAction = []
  },

  showAllProvinces: () => { dispatch(chooseProvinces()) },

  getCurrentCompanyInformation: () => { dispatch(getInformationCompany()) },

  formSelectProvinces: (event: any) => {
    dispatch(chooseDistrict(event))
    provinceId = event
  },

  formSelectDistrict: (event: any) => {
    districtId = event
    dispatch(chooseSubDistrict(provinceId,
      districtId))
  },

  formSelectSubDistrict: (event: any) => {
    subDistrictId = event
    dispatch(chooseZipCode(provinceId,
      districtId,
      subDistrictId))
  },

  changeTextFieldCompanyName1: (event: any) => {
    dispatch({
      type: CompanyInformationAction.handleChangeCompanyName1,
      payload: event
    })
  },

  changeTextFieldCompanyName2: (event: any) => {
    dispatch({
      type: CompanyInformationAction.handleChangeCompanyName2,
      payload: event
    })
  },

  changeTextFieldCompanyName3: (event: any) => {
    dispatch({
      type: CompanyInformationAction.handleChangeCompanyName3,
      payload: event
    })
  },

  changeTextFieldRegistrationNumber: (event: any) => {
    dispatch({
      type: CompanyInformationAction.handChangeRegistrationNumber,
      payload: event
    })
  },

  changeTextFieldAddressNumber: (event: any) => {
    dispatch({
      type: CompanyInformationAction.handChangeAddressNumber,
      payload: event
    })
  },

  changeTextFieldVillage: (event: any) => {
    dispatch({
      type: CompanyInformationAction.handChangeVillage,
      payload: event
    })
  },

  changeTextFieldRoad: (event: any) => {
    dispatch({
      type: CompanyInformationAction.handChangeRoad,
      payload: event
    })
  },

  changeTextFieldAuditorLicense: (event: any) => {
    dispatch({
      type: CompanyInformationAction.handleChangeAuditorLicense,
      payload: event
    })
  },

  changeTextFieldAuditor: (event: any) => {
    dispatch({
      type: CompanyInformationAction.handleChangeAuditor,
      payload: event
    })
  }
})

// #endregion

const form =
reduxForm({ form: FormManager.InformationForm })(companyInformation)
export default withTranslation('common')(connect(mapStateToProps, mapDispatchToProps)(form))
