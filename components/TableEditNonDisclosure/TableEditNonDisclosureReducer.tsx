import { TableEditNonDisclosurePresenter, TableEditNonDisclosureAction } from './TableEditNonDisclosureInterface'
import { tableEditNonDisclosurePresenter } from './TableEditNonDisclosurePresenter'
import { getNonDisclosureAction } from '../../apis/tableEditNonDisclosureAPIClient'
import Router from 'next/router'
import { routeToPageNonDisclosure } from '../../manager/routerManager'

export const tableEditNonDisclosureReducer = (state: TableEditNonDisclosurePresenter = tableEditNonDisclosurePresenter, action: any): any => {
  switch (action.type) {
    case getNonDisclosureAction.getNonDisclosureSuccess:
      return {
        ...state,
        dataGetNonDisclosure: action.getNonDisclosure
      }

    case getNonDisclosureAction.deleteNonDisclosureSuccess:
      alert('Delete Items Successfully')
      return state

    case getNonDisclosureAction.deleteNonDisclosureFailed:
      alert('Delete Items Falied')
      return state

    case TableEditNonDisclosureAction.getNonDisclosureEdit:
      localStorage.setItem('editNdaId', action.payload)
      Router.replace(routeToPageNonDisclosure)
      return state

    default:
      return state
  }
}
