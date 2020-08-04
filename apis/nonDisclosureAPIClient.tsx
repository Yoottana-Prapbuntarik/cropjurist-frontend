import { Dispatch } from 'redux'
import { serviceSetToken } from '../apis/baseAPIs'
import { KeyManager } from '../manager/keyManager'

export enum NonDisclosureAPIClient {
    nonDisclosureAPIClientSuccess = 'nonDisclosureAPIClient_Success',
    nonDisclosureAPIClientFailed = 'nonDisclosureAPIClient_Failed'
}

export const nonDisclosureAPIClient: any = (date: string,
  disclosureName: string,
  disclosureNameII: string,
  address: string,
  addressII: string,
  referenceI: string,
  referenceII: string,
  endDate: string,
  periodOfSecret: string,
  arbitrationJurisdiction: string,
  choiceOfLaw: string,
  nameOfSigning1: string,
  nameOfSigning2: string,
  scopeOfDiscussion: string,
  titleAndCapacityOfSigning1: string,
  titleAndCapacityOfSigning2: string) => async (dispatch: Dispatch
) => {
  serviceSetToken({
    method: 'post',
    url: 'nda/',
    data: params(
      date,
      disclosureName,
      disclosureNameII,
      address,
      addressII,
      referenceI,
      referenceII,
      endDate,
      periodOfSecret,
      arbitrationJurisdiction,
      choiceOfLaw,
      nameOfSigning1,
      nameOfSigning2,
      scopeOfDiscussion,
      titleAndCapacityOfSigning1,
      titleAndCapacityOfSigning2)
  })

    .then((response) => {
      if (response) {
        dispatch({
          type: NonDisclosureAPIClient.nonDisclosureAPIClientSuccess,
          keyMessage: KeyManager.SendInformationCompanySuccess
        })
      }
    })
}

const params = (
  date: string,
  disclosureName: string,
  disclosureNameII: string,
  address: string,
  addressII: string,
  referenceI: string,
  referenceII: string,
  endDate: string,
  periodOfSecret: string,
  arbitrationJurisdiction: string,
  choiceOfLaw: string,
  nameOfSigning1: string,
  nameOfSigning2: string,
  scopeOfDiscussion: string,
  titleAndCapacityOfSigning1: string,
  titleAndCapacityOfSigning2: string
) => {
  return {
    date: date,
    name_1: disclosureName,
    name_2: disclosureNameII,
    address_1: address,
    address_2: addressII,
    references_1: referenceI,
    references_2: referenceII,
    scope_of_discussion: scopeOfDiscussion,
    end_date: endDate,
    period_of_secret: periodOfSecret,
    arbitration_jurisdiction: arbitrationJurisdiction,
    choice_of_law: choiceOfLaw,
    name_of_signing_1: nameOfSigning1,
    name_of_signing_2: nameOfSigning2,
    title_and_capacity_of_signing_1: titleAndCapacityOfSigning1,
    title_and_capacity_of_signing_2: titleAndCapacityOfSigning2
  }
}
