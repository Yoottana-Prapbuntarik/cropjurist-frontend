import { Dispatch } from 'redux'
import {
  CompanyInformationAction
} from './CompanyInformationInterfaces'
import {
  chooseProvinces,
  chooseDistrict,
  chooseSubDistrict,
  chooseZipCode
} from '../../apis/AddressAPIClient'
import {
  companyInformationForm,
  updateCompanyInformationForm
} from '../../apis/companyInformationAPIClient'
import {
  reset
} from 'redux-form'
import {
  getInformationCompany
} from '../../apis/getInformationCompanyAPIClient'
import { FormManager } from '../../manager/formManager'
import { currentIDIformation } from './CompanyInformationReducer'

let provinceId = 0
let districtId = 0
let subDistrictId = 0

export const mapDispatchToProps = (dispatch: Dispatch) => ({
  submitCompanyInformation: (event: any) => {
    dispatch(companyInformationForm(event.companyName1,
      event.companyName2,
      event.companyName3,
      event.registrationNumber,
      event.addressNumber,
      event.village,
      event.road,
      event.province,
      event.district,
      event.subDistrict,
      event.zipCode,
      event.auditorLicense,
      event.auditorName))

    dispatch(reset(FormManager.InformationForm))
  },

  updateCompanyInformation: (event: any) => {
    dispatch(updateCompanyInformationForm(currentIDIformation,
      event.companyName1,
      event.companyName2,
      event.companyName3,
      event.registrationNumber,
      event.addressNumber,
      event.village,
      event.road,
      event.province,
      event.district,
      event.subDistrict,
      event.zipCode, event.auditorLicense,
      event.auditorName))

    dispatch(reset(FormManager.InformationForm))
  },

  showAllProvinces: () => { dispatch(chooseProvinces()) },

  getCurrentCompanyInformation: async () => {
    await dispatch(chooseProvinces())
    await dispatch(getInformationCompany())
  },

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

  formSelectZipcode: () => {
    return null
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
