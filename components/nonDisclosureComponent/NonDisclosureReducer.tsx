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

export let currentDataNonDisclosure

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

    case NonDisclosureAPIClient.getDisclosureAPIClientSuccess:
      if (action.dataAPI !== undefined) {
        currentDataNonDisclosure = action.dataAPI
        const nonDisclosurePresenter = {
          keyStatueAPI: state.keyStatueAPI = action.keyStatus,
          disclosureNameI: {
            name: KeyManager.DisclosureNameI,
            valueName: state.disclosureNameI.valueName = action.dataAPI.name_1
          },

          disclosureNameII: {
            name: KeyManager.DisclosureNameII,
            valueName: state.disclosureNameII.valueName = action.dataAPI.name_2
          },

          addressI: {
            name: KeyManager.AddressI,
            valueAddress: state.addressI.valueAddress = action.dataAPI.address_1
          },

          addressII: {
            name: KeyManager.AddressII,
            valueAddress: state.addressII.valueAddress = action.dataAPI.address_2
          },
          date: {
            name: KeyManager.Date,
            valueDate: state.date.valueDate = action.dataAPI.date_of_agreement
          },

          scopeOfDiscussion: {
            name: KeyManager.ScopeOfDiscussion,
            valueScopeDiscussion: state.scopeOfDiscussion.valueScopeDiscussion = action.dataAPI.scope_of_discussion
          },

          endDate: {
            name: KeyManager.EndDate,
            valueDate: state.endDate.valueDate = action.dataAPI.end_date
          },

          periodOfSecret: {
            name: KeyManager.PeriodOfSecret,
            valuePeriodOfSecret: state.periodOfSecret.valuePeriodOfSecret = action.dataAPI.survive_period
          },

          arbitrationJurisdiction: {
            name: KeyManager.ArbitrationJurisdiction,
            valueArbitrationJurisdiction: state.arbitrationJurisdiction.valueArbitrationJurisdiction = action.dataAPI.jurisdiction
          },

          choiceOfLaw: {
            name: KeyManager.ChoiceOfLaw,
            valueChoiceOfLaw: state.choiceOfLaw.valueChoiceOfLaw = action.dataAPI.choice_of_law
          },

          nameOfSigningCompanyI: {
            name: KeyManager.NameOfSigningCompany1,
            valueNameOfSigning: state.nameOfSigningCompanyI.valueNameOfSigning = action.dataAPI.name_of_signatory_party_1
          },

          nameOfSigningCompanyII: {
            name: KeyManager.NameOfSigningCompany2,
            valueNameOfSigning: state.nameOfSigningCompanyII.valueNameOfSigning = action.dataAPI.name_of_signatory_party_2
          },

          titleAndCapacityOfSigningCompanyI: {
            name: KeyManager.TitleAndCapacityOfSigningCompany1,
            valueTitleAndCapacityOfSigning: state.titleAndCapacityOfSigningCompanyI.valueTitleAndCapacityOfSigning = action.dataAPI.title_and_capacity_of_signatory_party_1
          },

          titleAndCapacityOfSigningCompanyII: {
            name: KeyManager.TitleAndCapacityOfSigningCompany2,
            valueTitleAndCapacityOfSigning: state.titleAndCapacityOfSigningCompanyII.valueTitleAndCapacityOfSigning = action.dataAPI.title_and_capacity_of_signatory_party_2
          }
        }
        return {
          ...state,
          nonDisclosurePresenter,
          keyStatueAPI: action.keyStatus

        }
      } else {
        return state
      }

    case NonDisclosureAPIClient.updateDisclosureAPIClientSuccess:
      Router.replace(routeToPageMyNonDisclosureAgreement)
      return state

    default:
      return state
  }
}
