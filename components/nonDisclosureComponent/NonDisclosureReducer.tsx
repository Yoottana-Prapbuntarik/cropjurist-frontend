import {
  NonDisclosurePresenter,
  NonDisclosureAction
} from './nonDisclosureInterface'
import {
  nonDisclosurePresenter
} from './NonDisclosurePresenter'
import {
  KeyManager
} from '../../manager/keyManager'
import { TextManager } from '../../manager/TextManager'
import { NonDisclosureAPIClient } from '../../apis/nonDisclosureAPIClient'
import { AddressAction, AddressActionII } from '../../apis/AddressAPIClient'
import { i18n } from '../../i18n'

export const nonDisclosureReducer = (state: NonDisclosurePresenter = nonDisclosurePresenter, action: any): any => {
  switch (action.type) {
    case NonDisclosureAction.handleChangeDisclosureNameI:
      return {
        ...state,
        disclosureNameI: {
          name: KeyManager.DisclosureNameI,
          valueName: action.payload

        }
      }
    case NonDisclosureAction.handleChangeDisclosureNameII:
      return {
        ...state,
        disclosureNameII: {
          name: KeyManager.DisclosureNameII,
          valueName: action.payload
        }
      }

    case NonDisclosureAction.handleChangeDisclosureAddressNumberI:
      return {
        ...state,
        addressNumberI: {
          name: KeyManager.AddressNumber,
          valueAddressNumber: action.payload
        }
      }

    case NonDisclosureAction.handleChangeDisclosureAddressNumberII:
      return {
        ...state,
        addressNumberII: {
          name: KeyManager.AddressNumberII,
          valueAddressNumber: action.payload
        }
      }

    case NonDisclosureAction.handleChangeDisclosureRoadI:
      return {
        ...state,
        roadI: {
          name: KeyManager.Road,
          valueRoad: action.payload
        }
      }

    case NonDisclosureAction.handleChangeDisclosureRoadII:
      return {
        ...state,
        roadII: {
          name: KeyManager.Road,
          valueRoad: action.payload
        }
      }

    case AddressAction.chooseProvincesSuccess: {
      const resetProvinces = [{
        province_id: 1,
        name: TextManager.DefaultProvince
      }]
      const newProvincesAction = resetProvinces.concat(action.provinces)
      return {
        ...state,
        provinceItems: newProvincesAction,
        provinceI: {
          name: KeyManager.Province,
          valueProvince: action.payload
        }
      }
    }

    case AddressActionII.chooseProvincesSuccessII: {
      const resetProvincesII = [{
        province_id: 1,
        name: TextManager.DefaultProvince
      }]
      const newProvincesActionII = resetProvincesII.concat(action.provincesII)
      return {
        ...state,
        provinceItemsII: newProvincesActionII,
        provinceII: {
          name: KeyManager.ProvinceII,
          valueProvince: action.payload
        }
      }
    }

    case AddressAction.chooseDistrictSuccess: {
      const resetDistrict = [{
        district_id: 0,
        name: TextManager.SelectData
      }]
      const newDistrictAction = resetDistrict.concat(action.district)
      return {
        ...state,
        districtItems: newDistrictAction,
        districtI: {
          name: KeyManager.District,
          valueDistrict: action.payload
        }
      }
    }

    case AddressActionII.chooseDistrictSuccessII: {
      const resetDistrictII = [{
        district_id: 0,
        name: TextManager.SelectData
      }]
      const newDistrictActionII = resetDistrictII.concat(action.districtII)
      return {
        ...state,
        districtItemsII: newDistrictActionII,
        districtII: {
          name: KeyManager.DistrictII,
          valueDistrict: action.payload
        }
      }
    }

    case AddressAction.chooseSubDistrictSuccess: {
      const resetSubDistrict = [{
        sub_district_id: 0,
        name: TextManager.SelectData
      }]
      const newSubDistrictAction = resetSubDistrict.concat(action.subDistrict)
      return {
        ...state,
        subDistrictItems: newSubDistrictAction,
        subDistrictI: {
          name: KeyManager.SubDistrict,
          valueSubDistrict: action.payload
        }
      }
    }

    case AddressActionII.chooseSubDistrictSuccessII: {
      const resetSubDistrictII = [{
        sub_district_id: 0,
        name: TextManager.SelectData
      }]
      const newSubDistrictActionII = resetSubDistrictII.concat(action.subDistrictII)

      return {
        ...state,
        subDistrictItemsII: newSubDistrictActionII,
        subDistrictII: {
          name: KeyManager.SubDistrictII,
          valueSubDistrict: action.payload
        }
      }
    }

    case AddressAction.chooseZipCodeSuccess: {
      const resetZipCode = [{ zipcode: TextManager.SelectData }]
      const newZipCodeAction = resetZipCode.concat(action.zipCode)
      return {
        ...state,
        zipCodeItems: newZipCodeAction,
        zipCodeI: {
          name: KeyManager.ZipCode,
          valueZipcode: action.payload
        }
      }
    }

    case AddressActionII.chooseZipCodeSuccessII: {
      const resetZipCodeII = [{ zipcode: TextManager.SelectData }]
      const newZipCodeActionII = resetZipCodeII.concat(action.zipCodeII)
      return {
        ...state,
        zipCodeItemsII: newZipCodeActionII,
        zipCodeII: {
          name: KeyManager.ZipCodeII,
          valueZipcode: action.payload
        }
      }
    }

    case NonDisclosureAction.handleChangeDisclosureReferenceI:
      return {
        ...state,
        referenceI: {
          name: KeyManager.ReferenceI,
          valueReference: action.payload
        }
      }
    case NonDisclosureAction.handleChangeDisclosureReferenceII:
      return {
        ...state,
        referenceII: {
          name: KeyManager.ReferenceII,
          valueReference: action.payload
        }
      }

    case NonDisclosureAction.handleChangeDate:
      return {
        ...state,
        date: {
          name: KeyManager.Date,
          valueDate: action.payload
        }
      }
    case NonDisclosureAction.handleChangeScopeOfDiscussion:
      return {
        ...state,
        scopeOfDiscussion: {
          name: KeyManager.ScopeOfDiscussion,
          valueScopeDiscussion: action.payload
        }
      }

    case NonDisclosureAction.handleChangeEndDate:
      return {
        ...state,
        endDate: {
          name: KeyManager.EndDate,
          valueDate: action.payload
        }
      }

    case NonDisclosureAction.handleChangePeriodOfSecret:
      return {
        ...state,
        periodOfSecret: {
          name: KeyManager.PeriodOfSecret,
          valuePeriodOfSecret: action.payload
        }
      }

    case NonDisclosureAction.handleChangeArbitrationJurisdiction:
      return {
        ...state,
        arbitrationJurisdiction: {
          name: KeyManager.ArbitrationJurisdiction,
          valueArbitrationJurisdiction: action.payload
        }
      }

    case NonDisclosureAction.handleChangeChoiceOfLaw:
      return {
        ...state,
        choiceOfLaw: {
          name: KeyManager.ChoiceOfLaw,
          valueChoiceOfLaw: action.payload
        }
      }

    case NonDisclosureAction.handleChangeCompanyName1:
      return {
        ...state,
        companyName1: {
          name: KeyManager.CompanyName1,
          valueCompanyName1: action.payload
        }
      }

    case NonDisclosureAction.handleChangeCompanyName2:
      return {
        ...state,
        companyName2: {
          name: KeyManager.CompanyName2,
          valueCompanyName2: action.payload
        }
      }

    case NonDisclosureAction.handleChangeNameOfSigningCompanyI:
      return {
        ...state,
        nameOfSigningCompanyI: {
          name: KeyManager.NameOfSigningCompany1,
          valueNameOfSigning1: action.payload
        }
      }

    case NonDisclosureAction.handleChangeNameOfSigningCompanyII:
      return {
        ...state,
        nameOfSigningCompanyII: {
          name: KeyManager.NameOfSigningCompany2,
          valueNameOfSigning1: action.payload
        }
      }
    case NonDisclosureAction.handleChangetitleAndCapacityOfSigningCompanyI:
      return {
        ...state,
        titleAndCapacityOfSigningCompanyI: {
          name: KeyManager.TitleAndCapacityOfSigningCompany1,
          valueTitleAndCapacityOfSigning1: action.payload
        }
      }
    case NonDisclosureAction.handleChangetitleAndCapacityOfSigningCompanyII:
      return {
        ...state,
        titleAndCapacityOfSigningCompanyII: {
          name: KeyManager.TitleAndCapacityOfSigningCompany2,
          valueTitleAndCapacityOfSigning1: action.payload
        }
      }
    case NonDisclosureAPIClient.nonDisclosureAPIClientSuccess:
      alert(i18n.t(action.keyMessage))
      return state

    case NonDisclosureAPIClient.nonDisclosureAPIClientFailed:
      alert(i18n.t(action.keyMessage))
      return state

    default:
      return state
  }
}
