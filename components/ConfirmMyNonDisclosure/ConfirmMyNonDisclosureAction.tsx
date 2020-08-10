import { Dispatch } from 'redux'
import { ConfirmMyNonDisclosureAction } from './ConfirmMyNonDisclosureInterface'
import { verificationMyNonDistclosure } from '../../apis/verifyMyNonDistclosureAPIClient'
import { confirmMyNonDisclosure } from '../../apis/confirmMyNonDisclosureAPIClient'

export const mapDispatchToProp = (dispatch: Dispatch, ownProps: any) => ({
  handleChangeTextFieldReason: (event: any) => {
    dispatch({
      type: ConfirmMyNonDisclosureAction.handleChangeTextFieldReason,
      payload: event
    })
  },

  handleChangeStatusDisclosure: (event: any) => {
    dispatch({
      type: ConfirmMyNonDisclosureAction.handleChangeStatusDisclosure,
      payload: event
    })
  },

  verificationMyNonDistclosure: () => {
    dispatch(verificationMyNonDistclosure(ownProps.pkId))
  },

  handldSubmitForm: (event: any) => {
    let id = ''
    let agreementString = ''
    if (event.Approve) {
      agreementString = 'true'
    } else {
      agreementString = 'false'
    }
    if (localStorage.getItem('pdf_id')) {
      id = localStorage.getItem('pdf_id')
    }

    dispatch(confirmMyNonDisclosure(
      agreementString,
      event.reason,
      id))
  }
})
