import { Dispatch } from 'redux'
import { NonDisclosureAction } from './nonDisclosureInterface'
import { nonDisclosureAPIClient } from '../../apis/nonDisclosureAPIClient'

export const mapDispatchToProps = (dispatch: Dispatch) => ({

  handleChangeDisclosureNameI: (event: any) => {
    dispatch({
      type: NonDisclosureAction.handleChangeDisclosureNameI,
      payload: event
    })
  },
  handleChangeDisclosureNameII: (event: any) => {
    dispatch({
      type: NonDisclosureAction.handleChangeDisclosureNameII,
      payload: event
    })
  },
  handleChangeDisclosureAddressI: (event: any) => {
    dispatch({
      type: NonDisclosureAction.handleChangeDisclosureAddressI,
      payload: event
    })
  },
  handleChangeDisclosureAddressII: (event: any) => {
    dispatch({
      type: NonDisclosureAction.handleChangeDisclosureAddressII,
      payload: event
    })
  },

  handleChangeDate: (event: any) => {
    dispatch({
      type: NonDisclosureAction.handleChangeDate,
      payload: event
    })
  },

  handleChangeScopeOfDiscussion: (event: any) => {
    dispatch({
      type: NonDisclosureAction.handleChangeScopeOfDiscussion,
      payload: event
    })
  },

  handleChangeEndDate: (event: any) => {
    dispatch({
      type: NonDisclosureAction.handleChangeEndDate,
      payload: event
    })
  },

  handleChangePeriodOfSecret: (event: any) => {
    dispatch({
      type: NonDisclosureAction.handleChangePeriodOfSecret,
      payload: event
    })
  },

  handleChangeArbitrationJurisdiction: (event: any) => {
    dispatch({
      type: NonDisclosureAction.handleChangeArbitrationJurisdiction,
      payload: event
    })
  },

  handleChangeChoiceOfLaw: (event: any) => {
    dispatch({
      type: NonDisclosureAction.handleChangeChoiceOfLaw,
      payload: event
    })
  },

  handleChangeNameOfSigningCompanyI: (event: any) => {
    dispatch({
      type: NonDisclosureAction.handleChangeNameOfSigningCompanyI,
      payload: event
    })
  },

  handleChangeNameOfSigningCompanyII: (event: any) => {
    dispatch({
      type: NonDisclosureAction.handleChangeNameOfSigningCompanyII,
      payload: event
    })
  },

  handleChangetitleAndCapacityOfSigningCompanyI: (event: any) => {
    dispatch({
      type: NonDisclosureAction.handleChangetitleAndCapacityOfSigningCompanyI,
      payload: event
    })
  },

  handleChangetitleAndCapacityOfSigningCompanyII: (event: any) => {
    dispatch({
      type: NonDisclosureAction.handleChangetitleAndCapacityOfSigningCompanyII,
      payload: event
    })
  },

  handldSubmitForm: (event: any) => {
    console.log('event', event)
    dispatch(nonDisclosureAPIClient(
      event.date,
      event.disclosureName,
      event.disclosureNameII,
      event.address,
      event.addressII,
      event.referenceI,
      event.referenceII,
      event.endDate,
      event.periodOfSecret,
      event.arbitrationJurisdiction,
      event.choiceOfLaw,
      event.nameOfSigning1,
      event.nameOfSigning2,
      event.scopeOfDiscussion,
      event.titleAndCapacityOfSigning1,
      event.titleAndCapacityOfSigning2
    ))
  }
})
