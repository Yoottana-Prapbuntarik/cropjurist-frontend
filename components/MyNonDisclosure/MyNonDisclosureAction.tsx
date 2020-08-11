import { Dispatch } from 'redux'
import { MyNonDisclosureAction } from './MyNonDisclosureInterface'
import { myNonDisclosureAPIClient } from '../../apis/myNonDisclosureAPIClient'
import { reset } from 'redux-form'
import { FormManager } from '../../manager/formManager'

export const mapDispatchToProps = (dispatch: Dispatch) => ({

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
    let id = ''
    if (localStorage.getItem('pdf_id')) {
      id = localStorage.getItem('pdf_id')
    }

    dispatch(myNonDisclosureAPIClient(
      event.emailPartyI,
      event.emailPartyII,
      id
    ))

    dispatch(reset(FormManager.MyNonDisclosureForm))
  }
})
