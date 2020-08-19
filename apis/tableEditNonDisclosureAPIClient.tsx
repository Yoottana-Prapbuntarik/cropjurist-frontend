import { serviceSetToken } from './baseAPIs'
import { Dispatch } from 'redux'

export enum getNonDisclosureAction {
    getNonDisclosureSuccess = 'getNonDisclosureSuccess',
    getNonDisclosureFailed = 'getNonDisclosureFailed',
    deleteNonDisclosureSuccess = 'deleteNonDisclosureSuccess',
    deleteNonDisclosureFailed = 'deleteNonDisclosureFailed',
}

export const getNonDisclosure: any = () => async (dispatch: Dispatch) => {
  serviceSetToken({
    method: 'get',
    url: 'nda/'
  })
    .then(response => {
      dispatch({
        type: getNonDisclosureAction.getNonDisclosureSuccess,
        getNonDisclosure: response.data
      })
    })
    .catch((error) => {
      console.log(error)
      dispatch({
        type: getNonDisclosureAction.getNonDisclosureFailed,
        getNonDisclosure: []
      })
    })
}

export const deleteNonDisclosure: any = (id: string) => async (dispatch: Dispatch) => {
  serviceSetToken({
    method: 'delete',
    url: `nda/${parseInt(id)}/edit/`
  })
    .then(response => {
      dispatch({
        type: getNonDisclosureAction.deleteNonDisclosureSuccess,
        keyMessage: response.data
      })
    })
    .catch((error) => {
      console.log(error)
      dispatch({
        type: getNonDisclosureAction.deleteNonDisclosureFailed
      })
    })
}
