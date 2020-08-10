import { Dispatch } from 'redux'
import service from '../apis/baseAPIs'
import { KeyManager } from '../manager/keyManager'

export enum ConfirmMyNonDisclosure {
    ConfirmMyNonDisclosureSuccess = 'ConfirmMyNonDisclosureSuccess',
    ConfirmMyNonDisclosureFailed = 'ConfirmMyNonDisclosureFailed'
}

export const confirmMyNonDisclosure: any = (agreement: string, reason: string, id: string) => async (dispatch: Dispatch) => {
  service({
    method: 'post',
    url: 'nda_acceptance_confirmation/',
    data: params(
      agreement,
      reason,
      id
    )
  }).then((response) => {
    if (response) {
      dispatch({
        type: ConfirmMyNonDisclosure.ConfirmMyNonDisclosureSuccess,
        keyMessage: KeyManager.SendInformationCompanySuccess
      })
      localStorage.removeItem('pdf_view_link')
      localStorage.removeItem('pdf_id')
    }
  })
}

const params = (agreement: string, reason: string, id: string) => {
  return {
    agreement: agreement,
    reason: reason,
    NDADetail: parseInt(id)
  }
}
