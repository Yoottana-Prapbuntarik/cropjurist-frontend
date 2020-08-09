import { serviceVerify } from '../apis/baseAPIs'
import { Dispatch } from 'redux'

export enum verificationAction {
    verification_Success = 'verification_Success'
}

export const verification: any = (tokenId: string, pkId: string) => async (dispatch: Dispatch) => {
  const url = `verify/${tokenId}/${pkId}/`
  serviceVerify({
    method: 'get',
    url: url
  })

    .then(response => {
      if (response) {
        dispatch({
          type: verificationAction.verification_Success,
          verifyData: response
        })
      }
    })
}
