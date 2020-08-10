import { Dispatch } from 'redux'
import service from '../apis/baseAPIs'
import { KeyManager } from '../manager/keyManager'

export enum MyNonDisclosureAPIClient {
    MyNonDisclosureAPIClientSuccess = 'MyNonDisclosureAPIClientSuccess',
    MyNonDisclosureAPIClientFailed = 'MyNonDisclosureAPIClientFailed'
}

export const myNonDisclosureAPIClient: any = (emailParty1: string, emailParty2: string, id: string) => async (dispatch: Dispatch) => {
  service({
    method: 'post',
    url: 'nda_sent_email_acceptance/',
    data: params(
      emailParty1,
      emailParty2,
      id
    )
  }).then((response) => {
    if (response) {
      dispatch({
        type: MyNonDisclosureAPIClient.MyNonDisclosureAPIClientSuccess,
        keyMessage: KeyManager.SendInformationCompanySuccess
      })
    }
  })
}

const params = (emailParty1: string, emailParty2: string, id: string) => {
  return {
    email_party_1: emailParty1,
    email_party_2: emailParty2,
    NDADetail: parseInt(id)
  }
}
