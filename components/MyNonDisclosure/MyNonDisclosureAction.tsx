import { Dispatch } from 'redux'
import { MyNonDisclosureAction } from './MyNonDisclosureInterface'
// wait for api call send data
export const mapDispatchToProp = (dispatch: Dispatch) => ({

  handleChangePartyI: (event: any) => {
    dispatch({
      type: MyNonDisclosureAction.handleChangePartyI,
      payload: event
    })
  },

  handleChangePartyII: (event: any) => {
    dispatch({
      type: MyNonDisclosureAction.handleChangePartyII,
      payload: event
    })
  },

  handldSubmitForm: (event: any) => {
    console.log(event)
  }
})
