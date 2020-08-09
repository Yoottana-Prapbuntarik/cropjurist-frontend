import { MyNonDisclosureAction, MyNonDisclosurePresenter } from './MyNonDisclosureInterface'
import { myNonDisclosurePresenter } from './MyNonDisclosurePresenter'
// case in api define type
// import { i18n } from '../../i18n'

export const myNonDisclosureReducer = (state: MyNonDisclosurePresenter = myNonDisclosurePresenter, action: any): any => {
  switch (action.type) {
    case MyNonDisclosureAction.handleChangePartyI:
      return {
        ...state,
        partyI: {
          name: 'Party',
          valueParty: action.payload,
          placeholder: 'Input email'
        }
      }

    case MyNonDisclosureAction.handleChangePartyII:
      return {
        ...state,
        partyII: {
          name: 'PartyII',
          valueParty: action.payload,
          placeholder: 'Input email'
        }
      }
    //   Wait for api call this
    default:
      return state
  }
}