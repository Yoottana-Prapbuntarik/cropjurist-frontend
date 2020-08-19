import { Dispatch } from 'redux'
import { getNonDisclosure, deleteNonDisclosure } from '../../apis/tableEditNonDisclosureAPIClient'
import { TableEditNonDisclosureAction } from './TableEditNonDisclosureInterface'

export const mapDispatchToProps = (dispatch: Dispatch) => ({
  getNonDisclosure: async () => dispatch(getNonDisclosure()),

  deleteNonDisclosure: async (event: any) => {
    await dispatch(deleteNonDisclosure(event))
    await dispatch(getNonDisclosure())
  },

  getNonDisclosureForEdit: async (event: any) => await dispatch({
    type: TableEditNonDisclosureAction.getNonDisclosureEdit,
    payload: event
  })

})
