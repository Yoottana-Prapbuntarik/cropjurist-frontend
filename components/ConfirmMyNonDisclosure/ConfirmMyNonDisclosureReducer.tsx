import { ConfirmMyNonDisclosureAction, ConfirmMyNonDisclosurePresenter } from './ConfirmMyNonDisclosureInterface'
import { confirmMyNonDisclosurePresenter } from './ConfirmMyNonDisclosureMyNonDisclosurePresenter'
import { VerifyMyNonDistclosureAction } from '../../apis/verifyMyNonDistclosureAPIClient'
import { ConfirmMyNonDisclosure } from '../../apis/confirmMyNonDisclosureAPIClient'
import { i18n } from '../../i18n'

export const confirmMyNonDisclosureReducer = (state: ConfirmMyNonDisclosurePresenter = confirmMyNonDisclosurePresenter, action: any): any => {
  switch (action.type) {
    case ConfirmMyNonDisclosureAction.handleChangeTextFieldReason:
      return {
        ...state,
        textReason: {
          name: 'reason',
          valueTextReason: action.paylaod
        }
      }

    case ConfirmMyNonDisclosureAction.handleChangeStatusDisclosure:
      return {
        ...state,
        statusDisclosure: {
          statusName: '',
          approve: action.payload
        }
      }
    case VerifyMyNonDistclosureAction.verifyMyNonDistclosureSuccess:
      return state

    case ConfirmMyNonDisclosure.ConfirmMyNonDisclosureSuccess:
      alert(i18n.t(action.keyMessage))
      return state

    default:
      return state
  }
}
