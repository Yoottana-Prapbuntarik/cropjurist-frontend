import { Dispatch } from 'redux'
import { NonDisclosureAction } from './nonDisclosureInterface'
import {
  chooseProvinces,
  chooseDistrict,
  chooseSubDistrict,
  chooseZipCode,
  chooseProvincesII,
  chooseDistrictII,
  chooseSubDistrictII,
  chooseZipCodeII
} from '../../apis/AddressAPIClient'
import { nonDisclosureAPIClient } from '../../apis/nonDisclosureAPIClient'
let provinceItems: any
let districtItems: any
let subDistrictItems: any

let provinceItemsII: any
let districtItemsII: any
let subDistrictItemsII: any

export const mapDispatchToProps = (dispatch: Dispatch) => ({
  showAllProvinces: () => { dispatch(chooseProvinces()) },
  showAllProvincesII: () => { dispatch(chooseProvincesII()) },

  formSelectProvinces: (provinceData: any, event: any) => {
    provinceData.map(item => {
      if (item.province_id === parseInt(event)) {
        provinceItems = { province_id: item.province_id, name: item.name }
      }
    })

    dispatch(chooseDistrict(provinceItems.province_id))
  },

  formSelectDistrict: (districtData, event: any) => {
    districtData.map(item => {
      if (item.district_id === parseInt(event)) {
        districtItems = { district_id: item.district_id, name: item.name }
      }
    })

    dispatch(chooseSubDistrict(provinceItems.province_id,
      districtItems.district_id))
  },

  formSelectSubDistrict: (subDistrictData, event: any) => {
    subDistrictData.map(item => {
      if (item.sub_district_id === parseInt(event)) {
        subDistrictItems = { sub_district_id: item.sub_district_id, name: item.name }
      }
    })

    dispatch(chooseZipCode(provinceItems.province_id,
      districtItems.district_id,
      subDistrictItems.sub_district_id))
  },

  formSelectProvincesII: (provinceData: any, event: any) => {
    provinceData.map(item => {
      if (item.province_id === parseInt(event)) {
        provinceItemsII = { province_id: item.province_id, name: item.name }
      }
    })

    dispatch(chooseDistrictII(provinceItemsII.province_id))
  },

  formSelectDistrictII: (districtData, event: any) => {
    districtData.map(item => {
      if (item.district_id === parseInt(event)) {
        districtItemsII = { district_id: item.district_id, name: item.name }
      }
    })

    dispatch(chooseSubDistrictII(provinceItemsII.province_id,
      districtItemsII.district_id))
  },

  formSelectSubDistrictII: (subDistrictData, event: any) => {
    subDistrictData.map(item => {
      if (item.sub_district_id === parseInt(event)) {
        subDistrictItemsII = { sub_district_id: item.sub_district_id, name: item.name }
      }
    })

    dispatch(chooseZipCodeII(provinceItemsII.province_id,
      districtItemsII.district_id,
      subDistrictItemsII.sub_district_id))
  },

  formSelectZipcode: (zipCodeItems, event: any) => {
    zipCodeItems.map(item => {
      if (item.sub_district_id === parseInt(event)) {
        zipCodeItems = { zipcode: item.zipcode, name: item.name }
      }
    })
  },

  formSelectZipcodeII: (zipCodeItemsII, event: any) => {
    zipCodeItemsII.map(item => {
      if (item.sub_district_id === parseInt(event)) {
        zipCodeItemsII = { zipcode: item.zipcode, name: item.name }
      }
    })
  },

  handleChangeDisclosureNameI: (event: any) => {
    dispatch({
      type: NonDisclosureAction.handleChangeDisclosureNameI,
      payload: event
    })
  },
  handleChangeDisclosureNameII: (event: any) => {
    dispatch({
      type: NonDisclosureAction.handleChangeDisclosureNameII,
      payload: event
    })
  },
  handleChangeDisclosureAddressNumberI: (event: any) => {
    dispatch({
      type: NonDisclosureAction.handleChangeDisclosureAddressNumberI,
      payload: event
    })
  },
  handleChangeDisclosureAddressNumberII: (event: any) => {
    dispatch({
      type: NonDisclosureAction.handleChangeDisclosureAddressNumberII,
      payload: event
    })
  },
  handleChangeDisclosureRoadI: (event: any) => {
    dispatch({
      type: NonDisclosureAction.handleChangeDisclosureRoadI,
      payload: event
    })
  },
  handleChangeDisclosureRoadII: (event: any) => {
    dispatch({
      type: NonDisclosureAction.handleChangeDisclosureRoadII,
      payload: event
    })
  },
  handleChangeDisclosureReferenceI: (event: any) => {
    dispatch({
      type: NonDisclosureAction.handleChangeDisclosureReferenceI,
      payload: event
    })
  },

  handleChangeDisclosureReferenceII: (event: any) => {
    dispatch({
      type: NonDisclosureAction.handleChangeDisclosureReferenceII,
      payload: event
    })
  },

  handleChangeDate: (event: any) => {
    dispatch({
      type: NonDisclosureAction.handleChangeDate,
      payload: event
    })
  },

  handleChangeScopeOfDiscussion: (event: any) => {
    dispatch({
      type: NonDisclosureAction.handleChangeScopeOfDiscussion,
      payload: event
    })
  },

  handleChangeEndDate: (event: any) => {
    dispatch({
      type: NonDisclosureAction.handleChangeEndDate,
      payload: event
    })
  },

  handleChangePeriodOfSecret: (event: any) => {
    dispatch({
      type: NonDisclosureAction.handleChangePeriodOfSecret,
      payload: event
    })
  },

  handleChangeArbitrationJurisdiction: (event: any) => {
    dispatch({
      type: NonDisclosureAction.handleChangeArbitrationJurisdiction,
      payload: event
    })
  },

  handleChangeChoiceOfLaw: (event: any) => {
    dispatch({
      type: NonDisclosureAction.handleChangeChoiceOfLaw,
      payload: event
    })
  },

  handleChangeCompanyName1: (event: any) => {
    dispatch({
      type: NonDisclosureAction.handleChangeCompanyName1,
      payload: event
    })
  },

  handleChangeCompanyName2: (event: any) => {
    dispatch({
      type: NonDisclosureAction.handleChangeCompanyName2,
      payload: event
    })
  },

  handleChangeNameOfSigningCompanyI: (event: any) => {
    dispatch({
      type: NonDisclosureAction.handleChangeNameOfSigningCompanyI,
      payload: event
    })
  },

  handleChangeNameOfSigningCompanyII: (event: any) => {
    dispatch({
      type: NonDisclosureAction.handleChangeNameOfSigningCompanyII,
      payload: event
    })
  },

  handleChangetitleAndCapacityOfSigningCompanyI: (event: any) => {
    dispatch({
      type: NonDisclosureAction.handleChangetitleAndCapacityOfSigningCompanyI,
      payload: event
    })
  },

  handleChangetitleAndCapacityOfSigningCompanyII: (event: any) => {
    dispatch({
      type: NonDisclosureAction.handleChangetitleAndCapacityOfSigningCompanyII,
      payload: event
    })
  },

  handldSubmitForm: (event: any) => {
    console.log(event)
    dispatch(nonDisclosureAPIClient(
      event.date,
      event.addressNumber,
      event.disclosureName,
      event.disclosureNameII,
      event.addressNumberII,
      event.arbitrationJurisdiction,
      event.choiceOfLaw,
      event.companyName1,
      event.companyName2,
      event.district,
      event.districtII,
      event.endDate,
      event.nameOfSigning1,
      event.nameOfSigning2,
      event.periodOfSecret,
      event.province,
      event.provinceII,
      event.referenceI,
      event.referenceII,
      event.road,
      event.roadII,
      event.scopeOfDiscussion,
      event.subDistrict,
      event.subDistrictII,
      event.titleAndCapacityOfSigning1,
      event.titleAndCapacityOfSigning2,
      event.zipCode,
      event.zipCodeII
    ))
  }

})
