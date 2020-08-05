import {
  NonDisclosurePresenter,
  NonDisclosureAction
} from './NonDisclosureInterface'
import {
  nonDisclosurePresenter
} from './NonDisclosurePresenter'
import {
  KeyManager
} from '../../manager/keyManager'
import { NonDisclosureAPIClient } from '../../apis/nonDisclosureAPIClient'
import { i18n } from '../../i18n'
import Router from 'next/router'
import { routeToPageMyNonDisclosureAgreement } from '../../manager/routerManager'

export const nonDisclosureReducer = (state: NonDisclosurePresenter = nonDisclosurePresenter, action: any): any => {
  switch (action.type) {
    case NonDisclosureAction.handleChangeDisclosureNameI:
      return {
        ...state,
        disclosureNameI: {
          name: KeyManager.DisclosureNameI,
          valueName: action.payload
        }
      }

    case NonDisclosureAction.handleChangeDisclosureNameII:
      return {
        ...state,
        disclosureNameII: {
          name: KeyManager.DisclosureNameII,
          valueName: action.payload
        }
      }

    case NonDisclosureAction.handleChangeDisclosureAddressI:
      return {
        ...state,
        addressI: {
          name: KeyManager.AddressI,
          valueAddress: action.payload
        }
      }

    case NonDisclosureAction.handleChangeDisclosureAddressII:
      return {
        ...state,
        addressII: {
          name: KeyManager.AddressII,
          valueAddress: action.payload
        }
      }

    case NonDisclosureAction.handleChangeDate:
      return {
        ...state,
        date: {
          name: KeyManager.Date,
          valueDate: action.payload
        }
      }

    case NonDisclosureAction.handleChangeScopeOfDiscussion:
      return {
        ...state,
        scopeOfDiscussion: {
          name: KeyManager.ScopeOfDiscussion,
          valueScopeDiscussion: action.payload
        }
      }

    case NonDisclosureAction.handleChangeEndDate:
      return {
        ...state,
        endDate: {
          name: KeyManager.EndDate,
          valueDate: action.payload
        }
      }

    case NonDisclosureAction.handleChangePeriodOfSecret:
      return {
        ...state,
        periodOfSecret: {
          name: KeyManager.PeriodOfSecret,
          valuePeriodOfSecret: action.payload
        }
      }

    case NonDisclosureAction.handleChangeArbitrationJurisdiction:
      return {
        ...state,
        arbitrationJurisdiction: {
          name: KeyManager.ArbitrationJurisdiction,
          valueArbitrationJurisdiction: action.payload
        }
      }

    case NonDisclosureAction.handleChangeChoiceOfLaw:
      return {
        ...state,
        choiceOfLaw: {
          name: KeyManager.ChoiceOfLaw,
          valueChoiceOfLaw: action.payload
        }
      }
    case NonDisclosureAction.handleChangeNameOfSigningCompanyI:
      return {
        ...state,
        nameOfSigningCompanyI: {
          name: KeyManager.NameOfSigningCompany1,
          valueNameOfSigning1: action.payload
        }
      }

    case NonDisclosureAction.handleChangeNameOfSigningCompanyII:
      return {
        ...state,
        nameOfSigningCompanyII: {
          name: KeyManager.NameOfSigningCompany2,
          valueNameOfSigning1: action.payload
        }
      }

    case NonDisclosureAction.handleChangetitleAndCapacityOfSigningCompanyI:
      return {
        ...state,
        titleAndCapacityOfSigningCompanyI: {
          name: KeyManager.TitleAndCapacityOfSigningCompany1,
          valueTitleAndCapacityOfSigning1: action.payload
        }
      }

    case NonDisclosureAction.handleChangetitleAndCapacityOfSigningCompanyII:
      return {
        ...state,
        titleAndCapacityOfSigningCompanyII: {
          name: KeyManager.TitleAndCapacityOfSigningCompany2,
          valueTitleAndCapacityOfSigning1: action.payload
        }
      }

    case NonDisclosureAPIClient.nonDisclosureAPIClientSuccess:
      alert(i18n.t(action.keyMessage))
      Router.replace(routeToPageMyNonDisclosureAgreement)
      return state

    case NonDisclosureAPIClient.nonDisclosureAPIClientFailed:
      alert(i18n.t(action.keyMessage))
      return state

    default:
      return state
  }
}
