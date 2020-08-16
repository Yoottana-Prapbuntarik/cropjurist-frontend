import { Dispatch } from 'redux'
import { NonDisclosureAction } from './NonDisclosureInterface'
import { nonDisclosureAPIClient } from '../../apis/nonDisclosureAPIClient'
import { reset } from 'redux-form'
import { FormManager } from '../../manager/formManager'
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
    const getTime = new Date().toLocaleString('en-US', { timeZone: 'Asia/Bangkok' })
    const currentChoiceOfLaw = event.choiceOfLaw === undefined ? 'ภาษีรายเดือน' : event.choiceOfLaw
    const currentArbitrationJurisdiction = event.arbitrationJurisdiction === undefined ? 'ภาษีรายเดือน' : event.arbitrationJurisdiction
    const currentDate = event.date === undefined ? getTime : event.date
    const currentEndDate = event.endDate === undefined ? getTime : event.endDate
    dispatch(nonDisclosureAPIClient(
      currentDate,
      event.disclosureName,
      event.disclosureNameII,
      event.addressI,
      event.addressII,
      event.partyI,
      event.partyII,
      currentEndDate,
      event.periodOfSecret,
      currentChoiceOfLaw,
      currentArbitrationJurisdiction,
      event.nameOfSigningI,
      event.nameOfSigningII,
      event.scopeOfDiscussion,
      event.titleAndCapacityOfSigningI,
      event.titleAndCapacityOfSigningII
    ))
    dispatch(reset(FormManager.NonDisclosureForm))
  }
})
