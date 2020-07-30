import {
  NonDisclosurePresenter,
  DisclosureName,
  AddressNumber,
  Road,
  Province,
  District,
  SubDistrict,
  Zipcode,
  Reference,
  ProvincesItem,
  DistrictItem,
  SubDistrictItem,
  ZipCodeItems,
  Date,
  ScopeOfDiscussion,
  EndDate,
  PeriodOfSecret,
  ArbitrationJurisdiction,
  ChoiceOfLaw,
  CompanyName1,
  NameOfSigning1,
  TitleAndCapacityOfSigning1,
  CompanyName2

} from '../nonDisclosureComponent/nonDisclosureInterface'
import { KeyManager } from './../../manager/keyManager'
import { TextManager } from '../../manager/TextManager'

const disclosureNameI: DisclosureName = {
  name: KeyManager.DisclosureNameI,
  valueName: ''
}

const disclosureNameII: DisclosureName = {
  name: KeyManager.DisclosureNameII,
  valueName: ''
}

const addressNumberI: AddressNumber = {
  name: KeyManager.AddressNumber,
  valueAddressNumber: ''
}

const addressNumberII: AddressNumber = {
  name: KeyManager.AddressNumberII,
  valueAddressNumber: ''
}

const roadI: Road = {
  name: KeyManager.Road,
  valueRoad: ''
}

const roadII: Road = {
  name: KeyManager.RoadII,
  valueRoad: ''
}

const provinceI: Province = {
  name: KeyManager.Province,
  valueProvince: '1'
}

const provinceII: Province = {
  name: KeyManager.ProvinceII,
  valueProvince: ''
}

const districtI: District = {
  name: KeyManager.District,
  valueDistrict: ''

}

const districtII: District = {
  name: KeyManager.DistrictII,
  valueDistrict: ''

}

const subDistrictI: SubDistrict = {
  name: KeyManager.SubDistrict,
  valueSubDistrict: ''
}

const subDistrictII: SubDistrict = {
  name: KeyManager.SubDistrictII,
  valueSubDistrict: ''
}

const zipCodeI: Zipcode = {
  name: KeyManager.ZipCode,
  valueZipcode: ''
}

const zipCodeII: Zipcode = {
  name: KeyManager.ZipCodeII,
  valueZipcode: ''
}

const referenceI: Reference = {
  name: KeyManager.ReferenceI,
  valueReference: ''
}

const referenceII: Reference = {
  name: KeyManager.ReferenceII,
  valueReference: ''
}

const provinceItems: ProvincesItem [] = [
  {
    name: '',
    province_id: 1
  }
]
const districtItems: DistrictItem [] = [
  {
    name: TextManager.SelectData,
    district_id: 1
  }
]
const subDistrictItems: SubDistrictItem [] = [
  {
    name: TextManager.SelectData,
    sub_district_id: 0
  }
]
const zipCodeItems: ZipCodeItems [] = [
  {
    zipcode: KeyManager.ZipCode
  }
]

const provinceItemsII: ProvincesItem [] = [
  {
    name: '',
    province_id: 1
  }
]
const districtItemsII: DistrictItem [] = [
  {
    name: TextManager.SelectData,
    district_id: 1
  }
]
const subDistrictItemsII: SubDistrictItem [] = [
  {
    name: TextManager.SelectData,
    sub_district_id: 0
  }
]
const zipCodeItemsII: ZipCodeItems [] = [
  {
    zipcode: TextManager.SelectData
  }
]

const date: Date = {
  name: KeyManager.Date,
  valueDate: ''
}
const scopeOfDiscussion: ScopeOfDiscussion = {
  name: KeyManager.ScopeOfDiscussion,
  valueScopeDiscussion: ''
}
const endDate: EndDate = {
  name: KeyManager.EndDate,
  valueDate: ''
}
const periodOfSecret: PeriodOfSecret = {
  name: KeyManager.PeriodOfSecret,
  valuePeriodOfSecret: ''
}
const arbitrationJurisdiction: ArbitrationJurisdiction = {
  name: KeyManager.ArbitrationJurisdiction,
  valueArbitrationJurisdiction: ''
}
const choiceOfLaw: ChoiceOfLaw = {
  name: KeyManager.ChoiceOfLaw,
  valueChoiceOfLaw: ''
}
const companyName1: CompanyName1 = {
  name: KeyManager.CompanyName1,
  valueCompanyName1: ''
}
const nameOfSigningCompanyI: NameOfSigning1 = {
  name: KeyManager.NameOfSigningCompany1,
  valueNameOfSigning1: ''
}

const nameOfSigningCompanyII: NameOfSigning1 = {
  name: KeyManager.NameOfSigningCompany2,
  valueNameOfSigning1: ''
}
const titleAndCapacityOfSigningCompanyI: TitleAndCapacityOfSigning1 = {
  name: KeyManager.TitleAndCapacityOfSigningCompany1,
  valueTitleAndCapacityOfSigning1: ''
}

const titleAndCapacityOfSigningCompanyII: TitleAndCapacityOfSigning1 = {
  name: KeyManager.TitleAndCapacityOfSigningCompany2,
  valueTitleAndCapacityOfSigning1: ''
}
const companyName2: CompanyName2 = {
  name: KeyManager.CompanyName2,
  valueCompanyName2: ''
}

export const nonDisclosurePresenter: NonDisclosurePresenter = {
  titleNonDisclosureI: KeyManager.ReferenceI,
  titleNonDisclosureII: KeyManager.ReferenceII,
  addressNonDisclosureI: KeyManager.ReferenceI,
  addressNonDisclosureII: KeyManager.ReferenceII,
  disclosureNameI: disclosureNameI,
  disclosureNameII: disclosureNameII,
  addressNumberI: addressNumberI,
  addressNumberII: addressNumberII,
  roadI: roadI,
  roadII: roadII,
  provinceI: provinceI,
  provinceII: provinceII,
  districtI: districtI,
  districtII: districtII,
  subDistrictI: subDistrictI,
  subDistrictII: subDistrictII,
  zipCodeI: zipCodeI,
  zipCodeII: zipCodeII,
  referenceI: referenceI,
  referenceII: referenceII,
  provinceItems: provinceItems,
  districtItems: districtItems,
  subDistrictItems: subDistrictItems,
  zipCodeItems: zipCodeItems,
  provinceItemsII: provinceItemsII,
  districtItemsII: districtItemsII,
  subDistrictItemsII: subDistrictItemsII,
  zipCodeItemsII: zipCodeItemsII,
  date: date,
  scopeOfDiscussion: scopeOfDiscussion,
  endDate: endDate,
  periodOfSecret: periodOfSecret,
  arbitrationJurisdiction: arbitrationJurisdiction,
  choiceOfLaw: choiceOfLaw,
  companyName1: companyName1,
  companyName2: companyName2,
  nameOfSigningCompanyI: nameOfSigningCompanyI,
  nameOfSigningCompanyII: nameOfSigningCompanyII,
  titleAndCapacityOfSigningCompanyI: titleAndCapacityOfSigningCompanyI,
  titleAndCapacityOfSigningCompanyII: titleAndCapacityOfSigningCompanyII
}
