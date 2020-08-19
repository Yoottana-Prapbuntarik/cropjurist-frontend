import { Dispatch } from 'redux'
import { serviceSetToken } from '../apis/baseAPIs'
import { KeyManager } from '../manager/keyManager'
export enum NonDisclosureAPIClient {
  nonDisclosureAPIClientSuccess = 'nonDisclosureAPIClient_Success',
  nonDisclosureAPIClientFailed = 'nonDisclosureAPIClient_Failed',
  getDisclosureAPIClientSuccess = 'getDisclosureAPIClient_Success',
  updateDisclosureAPIClientSuccess = 'updateDisclosureAPIClient_Success',
}

export const nonDisclosureAPIClient: any = (date: string,
  disclosureName: string,
  disclosureNameII: string,
  address: string,
  addressII: string,
  partyI: string,
  partyII: string,
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
      partyI,
      partyII,
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

        localStorage.setItem('pdf_view_link', response.data.pdf_view_link)
        localStorage.setItem('pdf_id', response.data.id)
      }
    })
}

export const updateNonDisclosureAPIClient: any = (
  id: string,
  date: string,
  disclosureName: string,
  disclosureNameII: string,
  address: string,
  addressII: string,
  partyI: string,
  partyII: string,
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
    method: 'put',
    url: `nda/${parseInt(id)}/edit/`,
    data: params(
      date,
      disclosureName,
      disclosureNameII,
      address,
      addressII,
      partyI,
      partyII,
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
          type: NonDisclosureAPIClient.updateDisclosureAPIClientSuccess,
          keyMessage: KeyManager.SendInformationCompanySuccess
        })

        localStorage.setItem('pdf_view_link', response.data.pdf_view_link)
        localStorage.setItem('pdf_id', response.data.id)
        localStorage.removeItem('editNdaId')
      }
    })
}

export const getNonDisclosureAPIClient: any = (id: string) => async (dispatch: Dispatch) => {
  serviceSetToken({
    method: 'get',
    url: `nda/${id}/edit/`
  }).then(response => {
    if (response) {
      dispatch({
        type: NonDisclosureAPIClient.getDisclosureAPIClientSuccess,
        dataAPI: response.data,
        keyStatus: response.status
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
  partyI: string,
  partyII: string,
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
    date_of_agreement: date,
    name_1: disclosureName,
    name_2: disclosureNameII,
    address_1: address,
    address_2: addressII,
    party_1: partyI,
    party_2: partyII,
    scope_of_discussion: scopeOfDiscussion,
    end_date: endDate,
    survive_period: periodOfSecret,
    jurisdiction: arbitrationJurisdiction,
    choice_of_law: choiceOfLaw,
    name_of_signatory_party_1: nameOfSigning1,
    name_of_signatory_party_2: nameOfSigning2,
    title_and_capacity_of_signatory_party_1: titleAndCapacityOfSigning1,
    title_and_capacity_of_signatory_party_2: titleAndCapacityOfSigning2
  }
}
