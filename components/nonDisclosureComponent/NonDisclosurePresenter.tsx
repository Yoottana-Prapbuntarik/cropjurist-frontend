import {
  NonDisclosurePresenter,
  DisclosureName,
  Address,
  Date,
  ScopeOfDiscussion,
  EndDate,
  PeriodOfSecret,
  ArbitrationJurisdiction,
  ChoiceOfLaw,
  NameOfSigning,
  TitleAndCapacityOfSigning

} from './nonDisclosureInterface'
import { KeyManager } from './../../manager/keyManager'

const disclosureNameI: DisclosureName = {
  name: KeyManager.DisclosureNameI,
  valueName: ''
}

const disclosureNameII: DisclosureName = {
  name: KeyManager.DisclosureNameII,
  valueName: ''
}

const addressI: Address = {
  name: KeyManager.AddressI,
  valueAddress: ''
}

const addressII: Address = {
  name: KeyManager.AddressII,
  valueAddress: ''
}

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

const nameOfSigningCompanyI: NameOfSigning = {
  name: KeyManager.NameOfSigningCompany1,
  valueNameOfSigning: ''
}

const nameOfSigningCompanyII: NameOfSigning = {
  name: KeyManager.NameOfSigningCompany2,
  valueNameOfSigning: ''
}

const titleAndCapacityOfSigningCompanyI: TitleAndCapacityOfSigning = {
  name: KeyManager.TitleAndCapacityOfSigningCompany1,
  valueTitleAndCapacityOfSigning: ''
}

const titleAndCapacityOfSigningCompanyII: TitleAndCapacityOfSigning = {
  name: KeyManager.TitleAndCapacityOfSigningCompany2,
  valueTitleAndCapacityOfSigning: ''
}

export const nonDisclosurePresenter: NonDisclosurePresenter = {
  titleNonDisclosureI: KeyManager.ReferenceI,
  titleNonDisclosureII: KeyManager.ReferenceII,
  addressNonDisclosureI: KeyManager.ReferenceI,
  addressNonDisclosureII: KeyManager.ReferenceII,
  disclosureNameI: disclosureNameI,
  disclosureNameII: disclosureNameII,
  addressI: addressI,
  addressII: addressII,
  date: date,
  scopeOfDiscussion: scopeOfDiscussion,
  endDate: endDate,
  periodOfSecret: periodOfSecret,
  arbitrationJurisdiction: arbitrationJurisdiction,
  choiceOfLaw: choiceOfLaw,
  nameOfSigningCompanyI: nameOfSigningCompanyI,
  nameOfSigningCompanyII: nameOfSigningCompanyII,
  titleAndCapacityOfSigningCompanyI: titleAndCapacityOfSigningCompanyI,
  titleAndCapacityOfSigningCompanyII: titleAndCapacityOfSigningCompanyII,
  keyPleaseSignin: KeyManager.PleaseSignin,
  buttonSubmit: KeyManager.GenerateAgreement,
  keyStatueAPI: ''
}
