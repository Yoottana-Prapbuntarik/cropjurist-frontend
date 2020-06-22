
import Router from 'next/router'
import {
  CompanyInformationPresenter,
  CompanyInformationAction
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
import {
  companyInformationAddressAction
} from '../../apis/companyInfomationAddressAPIClient'
import {
  SendInformationCompany
} from '../../apis/companyInformationAPIClient'
import {
  getInformationCompanyAction
} from '../../apis/getInformationCompanyAPIClient'
import {
  i18n
} from '../../i18n'

export let currentIDIformation = 0

enum DefineIndexArray {
  FirstIndex = 0
}

const DataFormApi = {
  ProvinceAPI: [],
  DistrictAPI: [],
  SubDistrictAPI: [],
  zipCodeAPI: []
}

export const companyInformationReducer =
  (state: CompanyInformationPresenter = companyInformationPresenter,
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
        const newProvincesAction = reseProvinces.concat(action.key_provinces)
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
        const newDistrictAction = resetDistrict.concat(action.key_district)
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
        const newSubDistrictAction = resetSubDistrict.concat(action.key_sub_district)
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
        const newZipCodeAction = resetZipCode.concat(action.key_zip_code)
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
          currentIDIformation = action.getInformationCompany.id
          DataFormApi.ProvinceAPI = state.provincesItem
          DataFormApi.ProvinceAPI[DefineIndexArray.FirstIndex] = {
            prvinceID: 0,
            name: action.getInformationCompany.province
          }

          DataFormApi.DistrictAPI = state.districtItem
          DataFormApi.DistrictAPI[DefineIndexArray.FirstIndex] = {
            districtId: 0,
            name: action.getInformationCompany.district
          }

          DataFormApi.SubDistrictAPI = state.subDistrictItem
          DataFormApi.SubDistrictAPI[DefineIndexArray.FirstIndex] = {
            districtId: 0,
            name: action.getInformationCompany.sub_district
          }
          DataFormApi.zipCodeAPI = state.zipCode
          DataFormApi.zipCodeAPI[DefineIndexArray.FirstIndex] = {
            zipcode: action.getInformationCompany.zipcode
          }

          console.log(action.getInformationCompany)
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
            provincesItem: DataFormApi.ProvinceAPI,
            districtItem: DataFormApi.DistrictAPI,
            subDistrictItem: DataFormApi.SubDistrictAPI,
            zipCode: DataFormApi.zipCodeAPI,
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
            companyInformationPresenter,
            keyGetCurrentInfomationStatus: action.keyStatus
          }
        } else {
          return state
        }
      }
      default:
        return state
    }
  }
