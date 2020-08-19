import { Dispatch } from 'redux'
import { NonDisclosureAction } from './NonDisclosureInterface'
import { nonDisclosureAPIClient, updateNonDisclosureAPIClient, getNonDisclosureAPIClient } from '../../apis/nonDisclosureAPIClient'
import { reset } from 'redux-form'
import { FormManager } from '../../manager/formManager'
import { currentDataNonDisclosure } from './NonDisclosureReducer'
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
      // currentDate,
      // event.disclosureName,
      // event.disclosureNameII,
      // event.addressI,
      // event.addressII,
      // event.partyI,
      // event.partyII,
      // currentEndDate,
      // event.periodOfSecret,
      // currentChoiceOfLaw,
      // currentArbitrationJurisdiction,
      // event.nameOfSigningI,
      // event.nameOfSigningII,
      // event.scopeOfDiscussion,
      // event.titleAndCapacityOfSigningI,
      // event.titleAndCapacityOfSigningII

    ))
    dispatch(reset(FormManager.NonDisclosureForm))
  },

  getNonDisclosureAPIClient: () => {
    const idUpdate = localStorage.getItem('editNdaId')
    dispatch(getNonDisclosureAPIClient(idUpdate))
  },

  handldUpdateSubmitForm: (event: any) => {
    const idUpdate = localStorage.getItem('editNdaId')
    const currentDisclosureName = event.disclosureName === undefined ? currentDataNonDisclosure.name_1 : event.disclosureName
    const currentDisclosureNameII = event.disclosureNameII === undefined ? currentDataNonDisclosure.name_2 : event.disclosureNameII
    const currentAddressI = event.addressI === undefined ? currentDataNonDisclosure.address_1 : event.addressI
    const currentAddressII = event.addressII === undefined ? currentDataNonDisclosure.address_2 : event.addressII
    const currentChoiceOfLaw = event.choiceOfLaw === undefined ? currentDataNonDisclosure.choice_of_law : event.choiceOfLaw
    const currentArbitrationJurisdiction = event.arbitrationJurisdiction === undefined ? currentDataNonDisclosure.jurisdiction : event.arbitrationJurisdiction
    const currentDate = event.date === undefined ? currentDataNonDisclosure.date_of_agreement : event.date
    const currentEndDate = event.endDate === undefined ? currentDataNonDisclosure.end_date : event.endDate
    const currentPeriodOfSecret = event.periodOfSecret === undefined ? currentDataNonDisclosure.survive_period : event.periodOfSecret
    const currentNameOfSigningI = event.nameOfSigningI === undefined ? currentDataNonDisclosure.name_of_signatory_party_1 : event.nameOfSigningI
    const currentNameOfSigningII = event.nameOfSigningII === undefined ? currentDataNonDisclosure.name_of_signatory_party_2 : event.nameOfSigningII
    const currentScopeOfDiscussion = event.scopeOfDiscussion === undefined ? currentDataNonDisclosure.scope_of_discussion : event.scopeOfDiscussion
    const currenTtitleAndCapacityOfSigningI = event.titleAndCapacityOfSigningI === undefined ? currentDataNonDisclosure.end_date : event.titleAndCapacityOfSigningI
    const currenTtitleAndCapacityOfSigningII = event.titleAndCapacityOfSigningII === undefined ? currentDataNonDisclosure.end_date : event.titleAndCapacityOfSigningII
    dispatch(updateNonDisclosureAPIClient(
      idUpdate,
      currentDate,
      currentDisclosureName,
      currentDisclosureNameII,
      currentAddressI,
      currentAddressII,
      event.partyI,
      event.partyII,
      currentEndDate,
      currentPeriodOfSecret,
      currentChoiceOfLaw,
      currentArbitrationJurisdiction,
      currentNameOfSigningI,
      currentNameOfSigningII,
      currentScopeOfDiscussion,
      currenTtitleAndCapacityOfSigningI,
      currenTtitleAndCapacityOfSigningII
    ))
    dispatch(reset(FormManager.NonDisclosureForm))
  }
})
